import express, { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDataBase } from "../data/BaseDatabase";

/* Visualiar as próprias informações do perfil - endpoint do tipo GET => /user/profile */
export const getUserProfileEndpoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        
        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(req.headers.authorization as string);

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);

        /*Validação do tipo de perfil*/
        if (user.role !== "NORMAL") {
            res.status(401).send({ message: "Acesso negado." })
            throw new Error("Apenas um usuário normal pode acessar essa funcionalidade.")
        }

        res.status(200).send({
            userName: user.name,
            userEmail: user.email,
            userId: user.id,
            role: user.role
        });

    } catch(err) {
        res.status(400).send({ message: err.message });
    };

    BaseDataBase.destroyConnection();
};
