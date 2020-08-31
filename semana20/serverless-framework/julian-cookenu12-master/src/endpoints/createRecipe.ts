import express, { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { IdGenerator } from "../services/IdGenerator";

/*Criação de nova receita - endpoint POST => /recipe)*/
export const createRecipeEndpoint = async (req: Request, res: Response) => {
    try {
        const authenticator = new Authenticator();

        const tokenData = authenticator.getData(req.headers.authorization as string);

        const idGenerator = new IdGenerator();

        const id = idGenerator.generate();

        const recipeDb = new RecipeDatabase();

        const recipeData = {
            recipe_id: req.body.recipe_id,
            author_id: tokenData.id,
            title: req.body.title,
            description: req.body.description,
            created_at: req.body.created_at
        };

        await recipeDb.createRecipe(
            id,
            recipeData.author_id,
            recipeData.title,
            recipeData.description,
            recipeData.created_at
        );

        res.status(200).send({
            message: "Receita criada com sucesso!"
        });

    } catch (error) {
        res.status(400).send({ message: error.message })
    };
};
