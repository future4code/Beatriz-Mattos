interface LambdaOutput {
    statusCode: number,
    body: string
};

export const handler = async (event: any): Promise<LambdaOutput> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            charName: "personagem qualquer",
            cartoonName: "desenho qualquer",
            image: "image.png"
        })
    }
};