### Exercício 1
a) Nesta tabela, utilizamos o *VARCHAR* para declarar *id* e *gender*, pois representa o tipo string de no máximo n caracteres. No caso é utilizado 255 caracteres (valor padrão) e 6 caracteres para que caiba as opções 'female' e 'male'; e utilizamos também o *DATE* para declarar *birth_date*, que representa uma data (YYYY-MM-DD).

b) O comando *SHOW DATABASES* mostra os bancos de dados presentes no sistema; e *SHOW TABLES* mostra as tabelas criadas. Neste caso, aparece a linha "Actor".

c) O comando *SHOW ACTOR* que foi sugerido não funciona, pois vai contra a lógica do case sensitive chamar dessa forma. Utilizando o comando *DESCRIBE Actor*, pude ver toda a estrutura da tabela, que no caso são os campos (fields), tipo (type), null, key, default e extra.
```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```
----------

### Exercício 2
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b)	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.016 sec.
O erro consta que usei uma entrada duplicada para o parâmetro PRIMARY KEY, que é o id.

c) Error Code: 1136. Column count doesn't match value count at row 1.
O erro consta que a contagem de colunas não corresponde à contagem de valores na linha, no caso faltou o atributo *birth_date* e *gender*.
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Error Code: 1364. Field 'name' doesn't have a default value.
O erro consta que o campo 'name' está sem o valor.
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Agostinho Carrara",
  400000,
  "1949-04-18", 
  "male"
);
```
e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
O erro consta que o formato de data estava incorreto; faltava as aspas.
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Amácio Mazaroppi",
  800000,
  "1912-04-09", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Dercy Gonçalves",
  670000,
  "1907-07-19", 
  "female"
);
```

------------

## Exercício 3
a) ```SELECT * from Actor WHERE gender = "female";```

b) ```SELECT salary from Actor WHERE name = "Tony Ramos";```

c) ```SELECT * from Actor WHERE gender = "invalid";```
Deu retorno nulo pois não foi criado nenhum ator com o gênero "invalid", e com a quantidade de caracteres, só caberia à uma string de no máximo 6 caracteres.

d) ```SELECT id, name, salary from Actor WHERE salary < 500000 ;```

e) Retornou um erro pois está escrito 'nome' ao invés de 'name'.
Correção: ```SELECT id, name from Actor WHERE id = "002";```
--------------------

## Exercício 4
a) A query sugerida filtra todos os nomes que iniciem com A ou J e que recebam um salário acima de 300000.

b) ```SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 35000000;```

c) ```SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";```

d) ```SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" or name LIKE "%g%" or name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;```
-----------------------------
## Exercício 5
a) 
```CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
);
```

b)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
"10"
)
;
```

c)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
"7"
);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);
```

e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    "9"
);
```
--------------------
## Exercício 6
a) ```SELECT id, title, rating FROM Movie WHERE id = "002";```

b) ```SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";```

c) ```SELECT id, title, synopsis FROM Movie WHERE rating > 7;```
__________________________
## Exercício 7
a) Não existe nenhum filme sugerido que contenha a palavra "vida" no título, mas na sinopse sim. :)
```
SELECT * FROM Movie
WHERE synopsis LIKE "%vida%";
```

b)
```
SELECT * FROM Movie
WHERE title LIKE "%Deus%" OR
      synopsis LIKE "%corpos%";
```

c)
```
SELECT * FROM Movie
WHERE release_Date < "2020-05-04";
```

d)
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%Dona%" OR
      synopsis LIKE "%morte%") AND rating > 7;
```