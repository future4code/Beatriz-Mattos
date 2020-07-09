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



