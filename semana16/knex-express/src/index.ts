import knex from 'knex';
import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `);
    return result[0][0];
}

//const res = searchActorByName('Tony Ramos');
//res.then(value => console.log(value));

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
};

// const res = countActors('male');
// res.then(value => console.log(value));

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({ salary: salary })
        .where("id", id);
};

// const res = updateActor("004", 190000);
// res.then(value => console.log(value));

const deleteActor = async (id: string): Promise<any> => {
    try {
        await connection("Actor").delete().where("id", id);

        console.log("Ator deletado con sucesso!")
    } catch (error) {
        console.error(error);
    }
};

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
};

//   const res = avgSalary('female');
//   res.then(value => console.log(value));

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get("/actor", async function (req, res) {
    try {
        const count = await countActors(req.query.gender as string);

        res.status(200).send({ quantity: count });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})

app.post("/actor", async function (req, res) {
    try {
        await updateSalary(req.body.id, req.body.salary);

        res.status(200).send({ message: "Sucesso!"
    });

    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

app.delete("/actor/:id", async (req, res) => {
    try {
        await deleteActor(req.params.id);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

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