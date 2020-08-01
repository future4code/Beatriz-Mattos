import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../model/User";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { BandBusiness } from "../business/BandBusiness";
import { RegisterBandDTO } from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
   public async register(req: Request, res: Response) {
        try {
            const authenticator = new Authenticator();
            const token = authenticator.getData(req.headers.authorization as string);

            if (token.role !== UserRole.ADMIN) {
                throw new UnauthorizedError("Only an admin can register bands")
            };

            if (!req.body.name || !req.body.music_genre || !req.body.responsible) {
                throw new InvalidParameterError("Empty fields")
            };

            const input: RegisterBandDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            };

            const bandBusiness = new BandBusiness();
            await bandBusiness.register(input);

            res.status(200).send({ message: "A new band was sucessfully registered!" })

        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection();
    };
    
    //TODO - a terminar
    public async details(req: Request, res: Response) {
        try {
            const authenticator = new Authenticator();
            authenticator.getData(req.headers.authorization as string);

            if(!req.body.id || !req.body.name) {
                throw new InvalidParameterError("Empty fields")
            };

            const bandBusiness = new BandBusiness();


        } catch (err) {
            res.status(400).send({ error: err.message })
        }

        await BaseDatabase.destroyConnection();
    };
};