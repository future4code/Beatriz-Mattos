import express, { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { UsersRelationDatabase } from "../data/UsersRelationDatabase";

export const followUserEndpoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const userToFollowId = req.body.userToFollowId;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);
        const userId = authenticationData.id;
        
        if(!userToFollowId) {
            throw new Error("Insira um id válido")
        };

        const userDataBase = new UserDatabase();
        const user = await userDataBase.getUserById(userToFollowId);

        if(!user) {
            throw new Error("Usuário não existe")
        };

        const usersRelationDatabase = new UsersRelationDatabase();
        await usersRelationDatabase.followUser(
            userId,
            userToFollowId
        );

        res.status(200).send({
            message: "Usuário seguido com sucesso!"
        });

    } catch(err) {
        res.status(400).send({ message: err.message });
    };
};
