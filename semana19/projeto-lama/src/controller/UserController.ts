import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const user = await userBusiness.getUserByEmail(loginData);

            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({id: user.getId()});

            res.status(200).send({ token: accessToken });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}