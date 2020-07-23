import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {
        createUserEndpoint,
        getUserByIdEndpoint,
        updateUserEndpoint
      } from "./endpoints/users";

import { createTaskEndpoint } from "./endpoints/tasks";

/**************************************************************/

dotenv.config();

/**************************************************************/

const app = express();

app.use(express.json());

app.post("/user", createUserEndpoint);
app.get("/user/:id", getUserByIdEndpoint);
app.put("/user/edit", updateUserEndpoint);
app.put("/task", createTaskEndpoint);


const server = app.listen("3000", () => {
  if(server) {
    const address = server.address() as AddressInfo;
    console.log("Server running on http://localhost:3000")
  }
  else {
    console.log("Failure on running server")
  }
})

