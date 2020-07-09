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
app.get("/actor", async function(req, res) {
    try {
        const count = await countActors(req.query.gender as string);

        res.status(200).send({ quantity: count });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})
```
____________________________________________________________________________________

## Exercício 4

a)
```
app.post("/actor", async function (req, res) {
    try {
        await updateSalary(req.body.id, req.body.salary);

        res.status(200).send({ message: "Sucesso!"
    });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})
```

b)
```
app.delete("/actor/:id", async (req, res) => {
    try {
        await deleteActor(req.params.id);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
})
```

____________________________________________________________________________________

## Exercício 5
```
const createMovie = async (
    id: string,
    title: string,
    releaseDate: Date,
    playingLimitDate: Date
) => {
    await connection
    .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_date: releaseDate,
        playing_limit_date: playingLimitDate
    })
    .into("Movie");
};

app.post("/movie/:id", async (req, res) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.releaseDate,
            req.body.playingLimitDate
        );

        res.status(200).send({ message: "Sucesso!" });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});
```

____________________________________________________________________________________

## Exercício 6
```
const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie LIMIT 15
    `);
    return result[0];
}

app.post("/movie/:id", async (req, res) => {
    try {
        const movies = await getAllMovies();

        res.status(200).send({ movies: movies });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});
```

____________________________________________________________________________________

## Exercício 7

```
async function searchMovie(name: string): Promise<any> {
    try {
        const result = await connection
            .select("*")
            .from("Movie")
            .where("name", "LIKE", `%${name}%`)

            return result
    } catch (error) {
        console.log(error)
    }
}

app.get("/movie/search", async (req, res) => {
    try {
      const movies = await searchMovie(req.query.query as string);
  
      res.status(200).send({
        movies: movies,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
```