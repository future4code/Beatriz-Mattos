import express, { Request, Response } from "express";
import { BaseDataBase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import HashManager from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

/* Login de usuário criado - endpoint do tipo POST => /login */
export const loginEndpoint = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;
        
        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(email);
        
        const hashManager = new HashManager();        
        
        /*Validação da senha*/
        const isPasswordCorrect = await hashManager.compare(password, user.password);
        
        if (!isPasswordCorrect) {
            throw new Error("Usuário ou senha inválidos");
        }

        /*Validação do email*/
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        /*Validação dos campos*/
        if (!email || !password) {
            throw new Error("Parâmetros inválidos.");
        }

        const authenticator = new Authenticator();
        
            const token = authenticator.generateToken({
                id: user.id,
                role: role
            });
        
            res.status(200).send({ access_token: token });

    } catch(err) {
        res.status(400).send({ message: err.message });
    };

    await BaseDataBase.destroyConnection();
};
