import express, { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { BaseDataBase } from "../data/BaseDatabase";
import { FeedDatabase } from "../data/FeedDatabase";

export const getFeedEndpoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userId = authenticationData.id;

        const feedDatabase = new FeedDatabase();
        const feed = await feedDatabase.getFeed(userId);

        res.status(200).send(feed);

    } catch (err) {
        res.status(400).send({ message: err.message })
    };

    await BaseDataBase.destroyConnection();
};