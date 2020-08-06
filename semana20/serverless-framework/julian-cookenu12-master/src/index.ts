import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import cors from "cors";

import { signUpEndpoint } from "./endpoints/signUp";
import { loginEndpoint } from "./endpoints/login";
import { getUserProfileEndpoint } from "./endpoints/getUserProfile";
import { getUserEndpoint } from "./endpoints/getUser";
import { createRecipeEndpoint } from "./endpoints/createRecipe";
import { getRecipeEndpoint } from "./endpoints/getRecipe";
import { followUserEndpoint } from "./endpoints/followUser";
import { unfollowUserEndpoint } from "./endpoints/unfollowUser";
import { getFeedEndpoint } from "./endpoints/getFeed";

if (process.env.NODE_ENV !== "serverless") {
    dotenv.config();
}

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

/* paths dos endpoints */
app.post("/signup", signUpEndpoint);
app.post("/login", loginEndpoint);
app.get("/user/profile", getUserProfileEndpoint);
app.get("/user/:id", getUserEndpoint);
app.post("/recipe", createRecipeEndpoint);
app.get("/recipe/:id", getRecipeEndpoint);
app.post("/user/follow", followUserEndpoint);
app.post("/user/unfollow", unfollowUserEndpoint);
app.get("/feed", getFeedEndpoint);


export default app;

if (process.env.NODE_ENV !== "serverless") {
    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Server is running in http://localhost:${address.port}`);
        }
        else {
            console.error(`Failure upon starting server.`);
        }
    });
};
