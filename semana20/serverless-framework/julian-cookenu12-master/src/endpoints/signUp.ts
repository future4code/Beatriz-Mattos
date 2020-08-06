import express, { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import HashManager from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDataBase } from "../data/BaseDatabase";

/* Cadastro de novo usuário- endpoint do tipo POST => /signup */
export const signUpEndpoint = async (req: Request, res: Response) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;

        /*Validação dos campos */
        if (!name || !email || !password) {
            throw new Error("Insira todas as informações necessárias para o cadastro.");
        }

        /*Validação do email*/
        if (!email || email.indexOf("@") === -1) {
            throw new Error("E-mail inválido.");
        }
        
        /*Validação da senha*/
        if (password.length < 6) {
            throw new Error("A senha deve conter no mínimo 6 caracteres.");
        }
        
        /* Instâncias de classes e serviços */
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        /* Criptografando senhas p/ jogar no banco */
        const hashManager = new HashManager();
        const cipherText = await hashManager.hash(password);

        /* Gravando usuário no banco */
        const userDb = new UserDatabase();
        await userDb.createUser(
            id,
            name,
            email,
            cipherText,
            role
        );

        /* Devolve um token de acesso p/ Front */
        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id,
            role: role
        });

        res.status(200).send({ access_token: token });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }

    await BaseDataBase.destroyConnection();
};