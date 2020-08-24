import express, { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import moment from "moment";

/*Pegando receita -  GET => /recipe/:id)*/
export const getRecipeEndpoint = async (req: Request, res: Response) => {
    try {
        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(req.headers.authorization as string);

        const recipeDB = new RecipeDatabase();
        const recipe = await recipeDB.getRecipeById(req.params.id as any);
       
        res.status(200).send({
            id: recipe.id,
	        title: recipe.title,
	        description: recipe.description,
	        createdAt: recipe.created_at
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    };
};
