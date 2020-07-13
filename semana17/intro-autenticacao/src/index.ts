import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen("3000", () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log("Server running on http://localhost:3000")
    }
    else {
        console.log("Failure on running server")
    }
})  
