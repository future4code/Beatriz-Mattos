### Exercício 1
a) Quando usamos o raw, além de receber os dados que requisitamos, também recebemos um monte de metadados provenientes do MySQL. Para acessar o que queremos, basta acessar a posição[0] do índice[0] do array.

b)
```
const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`);
    return result[0][0];
}

const res = searchActorByName('Tony Ramos');
res.then(value => console.log(value));
```

c)
```
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
};

const res = countActors('male');
res.then(value => console.log(value));
```

____________________________________________________________________________________

### Exercício 2
a)
```
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({salary: salary})
        .where("id", id);
};

const res = updateActor("004", 190000)
res.then(value => console.log(value))
```

b)
```
const deleteActor = async (id: string): Promise<any> => {
    try {
        await connection("Actor").delete().where("id", id);

            console.log("Ator deletado con sucesso!")
    } catch (error) {
        console.error(error);
    }
};
```

c)
```
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };
```

____________________________________________________________________________________

## Exercício 3
a) O id está sendo lido com *req.params.id* pois é um parâmetro que está sendo recebido pela função e passado para a URL.

b) O *try* tem como resposta http 200 pois é a resposta de status de sucesso que indica que a requisição foi bem sucedida. Já o *catch* é responsável por retornar as 'bad requests'.

c)
```
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActorsByGender(req.query.gender as string);
        res.status(200).send({
        quantity: count,
    });
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
```
____________________________________________________________________________________
