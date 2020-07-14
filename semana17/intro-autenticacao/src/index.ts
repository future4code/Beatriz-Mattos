import dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { IdGenerator } from "./service/IdGenerator";
import { UserDatabase } from "./data/UserDataBase";
import * as jwt from "jsonwebtoken";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const userData = 
        {
            email: req.body.email,
            password: req.body.password

        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        const userDatabase = new userDatabase();

    } catch (err) {
        res.status(400).send({ message: err });
    }
});


// const server = app.listen("3000", () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log("Server running on http://localhost:3000")
//     }
//     else {
//         console.log("Failure on running server")
//     }
// })  
