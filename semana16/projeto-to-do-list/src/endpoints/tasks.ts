import { Request, Response } from "express";
import { createTask } from "../data/tasks";
import moment from "moment";

export const createTaskEndpoint = async (req: Request, res: Response) => {
    try {

        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId
        ) {
            throw new Error("Parâmetros inválidos.")
        }

        const date = moment(req.body.limitDate, "DD/MM/YYYY")
        await createTask(
            req.body.title,
            req.body.description,
            date,
            req.body.creatorUserId
        )

        res.sendStatus(200);

    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};