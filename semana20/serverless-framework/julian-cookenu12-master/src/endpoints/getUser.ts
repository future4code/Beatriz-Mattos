import express, { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDataBase } from "../data/BaseDatabase";


/* Visualiza informações do perfil de outro usuário - endpoint GET => /user/:id */
export const getUserEndpoint = async (req: Request, res: Response) => {
    try {
        const authenticator = new Authenticator();
        const authenticationData = await authenticator.getData(req.headers.authorization as string);

        const userDB = new UserDatabase();
        const user = await userDB.getUserById(req.params.id);

        res.status(200).send({
            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            role: user.role
        });

    } catch(err) {
        res.status(400).send({ message: err.message });
    };

    BaseDataBase.destroyConnection();
};
