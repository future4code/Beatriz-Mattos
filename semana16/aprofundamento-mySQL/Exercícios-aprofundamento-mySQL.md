### Exercício 1
a) O comando *ALTER TABLE Actor DROP COLUMN salary* removeria toda a coluna *salary*, que é aonde ficam registrados os salários da tabela de atores.

b) Após a keyword *CHANGE*, é nomeada a coluna que deseja alterar e em seguida é especificada a nova definição, que inclui o novo nome. Logo, o comando *ALTER TABLE Actor CHANGE gender sex VARCHAR(6)* altera 'gender' para 'sex'.

c) O comando *ALTER TABLE Actor CHANGE gender gender VARCHAR(255)* acrescentaria mais caracteres na coluna *gender*, permitindo que ela aceite strings até 255 caracteres.

d) ``` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); ```

____________________________________________________________________________________

### Exercício 2
a)
```
UPDATE Actor
	SET name = "Moacyr Franco",
	birth_date = "2020-02-10",
	gender = "male"
WHERE id = "003";
```

b)
```
UPDATE Actor
	SET name = UPPER("Juliana Pães")
WHERE id = "005";
```

c) 
```
UPDATE Actor
SET
	name = "Suzana Vieira",
	birth_date = "1942-08-23",
	salary = 600000,
	gender = "female"
WHERE id = "005";
```

d) ```UPDATE Actor SET salary = 900000,  gender = "female" WHERE id = "010"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0```
Não deu erro, mas como não existe o autor com id "010", logo não afetou e nem alterou nenhuma linha.

____________________________________________________________________________________

## Exercício 3
a) ```DELETE FROM Actor WHERE name = "Fernanda Montenegro";```

b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

____________________________________________________________________________________

## Exercício 4
a) ```SELECT MAX(salary) FROM Actor;```

b) ```SELECT MIN(salary) FROM Actor WHERE gender = "female";```

c) ```SELECT COUNT(*) FROM Actor WHERE gender = "female";```

d) ```SELECT SUM(salary) FROM Actor;```

____________________________________________________________________________________

## Exercício 5
a) A query ```SELECT COUNT(*), gender FROM Actor GROUP BY gender;``` retornou a tabela com a quantidade de homens e mulheres da lista de atores, agrupados por gênero.

b)
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

____________________________________________________________________________________

## Exercício 6

a) ```ALTER TABLE Movie ADD playing_limit_date DATE;```

b) ```ALTER TABLE Movie CHANGE rating rating FLOAT;```

c)
```
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
UPDATE Movie
SET
	playing_limit_date = "2005-07-07"
WHERE id = "002";
```

d)
```
DELETE FROM Movie WHERE id = "004";
UPDATE Movie
	SET synopsis = "Imagine uma sinopse bem legal aqui"
WHERE id = "004";
```
Resultado: *0 rows affected Rows matched: 0 Changed: 0 Warnings: 0*; significando que o update não serviu para nada pois a sinopse e todos os dados do filme que estava no id 004 foram deletados.

____________________________________________________________________________________

## Exercício 7

a)
```
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;
```

b) ```SELECT AVG(rating) FROM Movie;```

c) ```SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();```

d) ```SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();```

e) ```SELECT MAX(rating) FROM Movie;```

f) ```SELECT MIN(rating) FROM Movie;```

____________________________________________________________________________________

## Exercício 8

a) ```SELECT * FROM Movie ORDER BY title;```

b) ```SELECT * FROM Movie ORDER BY title LIMIT 5;```

c)
```
SELECT (*) FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```