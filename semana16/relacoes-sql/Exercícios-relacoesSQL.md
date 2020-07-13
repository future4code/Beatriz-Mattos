## Exercício 1
a) A chave estrangeira, ou melhor, *FOREIGN KEY* é uma coluna ou grupo de colunas em uma tabela de banco de dados relacional que fornece um "link" entre dados em duas tabelas. Atua como referência cruzada entre as tabelas porque faz referência à chave primaria (*PRIMARY KEY*) de outra tabela, estabelecendo assim um elo entre elas.

b)
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
	"Filme muito bom, entretenimento garantido para toda a família",
	9,
	"001"
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
	"Mais ou menos, o começo é ruim e o final parece que está no começo",
	5,
	"002"
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
	"Excelente, nunca vi um filme mais divertido que este",
	10,
	"003"
);
SELECT * FROM Rating;
```

c) ```INSERT INTO Rating (id, comment, rate, movie_id)  VALUES (   "010",     "Testando o erro",     7,   "002" )	1 row(s) affected```
Mesmo colocando um id inexistente, ele adicionou o teste à tabela de Rating.

d) ```ALTER TABLE Movie DROP COLUMN rating;```

_____________________________________________________________________________________

## Exercício 2

a) A nova tabela criada, nominada como *MovieCast*, cria uma *relação N:M* com a tabela *Actor* e a tabela *Movie*, gerando duas colunas que permitem manipular o id relacionado de ambas.
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

b) Fiz todas as relações possíveis, contendo apenas 3 filmes e 6 atores em minhas tabelas.
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "007"
);
SELECT * FROM MovieCast;
```

c) ```Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_beatriz_mattos_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```
Tradução: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falhou.
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"aaa",
    "bbb"
);
```

d) ```DELETE FROM Actor WHERE id = "001";```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_beatriz_mattos_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não foi possível deletar o ator, pois para isso ser possível, antes precisaria deletar todas as referências que se tem dele nas outras tabelas.

____________________________________________________________________________________

## Exercício 3

a) A query sugerida retorna uma tabela com os dados que possuem correspondentes dentre as tabelas *Movie* e *Rating*. O operador *ON* faz uma associação entre duas linhas de dados que já estão associadas, que no caso são o *id* da tabela *Movie* e o *movie_id* da tabela *Rating*.

b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

____________________________________________________________________________________

## Exercício 4

a)
```
SELECT Movie.title, Movie.id as movie_id, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b)
```
SELECT Movie.id as movie_id, Movie.title, MovieCast.actor_id  FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

c)
```
SELECT AVG(Rating.rate), Movie.id, Movie.title FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY(Movie.id);
```

____________________________________________________________________________________