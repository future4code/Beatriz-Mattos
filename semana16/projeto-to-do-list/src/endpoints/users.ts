import { Request, Response } from 'express';
import { createUser, getUserById, updateUser } from '../data/users';

export const createUserEndpoint = async (req: Request, res: Response): Promise<void> => {
    try {

        if(!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Parâmetros inválidos.")
        }

        await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.sendStatus(200);

    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

export const getUserByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserById(id);

        if (!user) {
            throw new Error("Usuário não encontrado.")
        }

        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        });

    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

export const updateUserEndpoint = async (req: Request, res: Response) => {
    try {

        if (req.body.name === "" || req.body.nickname === "" || !req.body.id) {
            throw new Error("Parâmetros inválidos.")
        }

        await updateUser(
            req.body.id,
            req.body.name,
            req.body.nickname
        )

        res.sendStatus(200);

    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};