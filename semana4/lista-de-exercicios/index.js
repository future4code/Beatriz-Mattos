/* Exercícios de leitura de código - Exercício 1

O trecho de código exibe uma função capaz de converter um valor em dólar para reais, considerando o valor inserido pelo usuário.
A funcão é iniciada com o parâmetro valorEmDolar.
Dentro do escopo da função, é declarada uma variável que recebe os dados que o usuário inseriu no prompt, convertidos com a função Number().
É retornado um valor que concatena a string "R$" com o resultado do parâmetro valorEmDolar multiplicado com a cotação inserida pelo usuário.
Fora do escopo, é declarada uma variável que "invoca" a função acima  recebendo o valor retornado da função e passa 100 como parâmetro.
Em seguida, é impresso o valor da última variável no console.

Se eu digitasse o valor 10 no prompt, seria imprimido R$1000 no console, pois 10 * 100 = 1000;

*/

/* Exercício 2

O código exibe uma função que calcula qual será o valor total após o investimento de acordo com o tipo de investimento especificado.
A função é iniciada com dois parâmetros, tipoDeInvestimento e valor.
Dentro do escopo da função, é iniciado o parâmetro tipoDeInvestimento na estrutura switch para multiplicar cada valor de acordo com a opção (case) especificada.
Por exemplo, se a opção de investimento escolhida for "Poupança", o valor após o investimento será armazenado como o valor que o usuário quer investir multiplicado por 1.03; se a opção for "Renda Fixa", o valor armazenado será o valor que o usuário quer investir multiplicado por 1.05, e assim por diante com as demais cases.
É retornado o valorAposInvestimento.
Se for inserido um tipo de investimento de forma incorreta, será enviado um alert para o usuário.
Fora do escopo, são declaradas duas variáveis, que "invocam" a função acima com valores diferentes. A primeira se encaixa no case "Ações" com o valor 150 e teria seu valor multiplicado por 1.1, que resultaria em 165;
A segunda encaixaria no case Default, gerando um alert com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" e recebe um valor undefined, pois não obteve nenhum valor da função.

*/

/* Exercício 3

O código exibe um array de números e 2 arrays vazios, array1 e array2.
O laço for foi estabelecido para "varrer" o array de números, passando por todos os elementos.
É criada a condição if fazendo uma operação do número com módulo (numero%2), comparando se o resto é igual a zero, se essa condição for verdadeira, o número é adicionado com o método .push ao array1, caso contrário o número é adicionado ao array2.
É impresso no console uma mensagem "Quantidade total de números", + o comprimento do array numeros, que é 14.
Em outras linhas, é impresso o comprimento dos demais arrays, que são, respectivamente, 6 e 8.

*/

/* Exercício 4

O código exibe um array de números com muitos elementos, e 2 variáveis, sendo elas numero1 com valor Infinity e numero2 com valor iniciado em 0.
O laço for faz a "varredura" no array de números, com o apelido 'numero' para cada elemento do mesmo; é criada a condição if comparando se o número é menor que numero1 e se essa condição for verdadeira, numero1 recebe esse valor;
é criada outra condição if comparando se o numero2 é maior que o numero e se essa condição for verdadeira, numero2 recebe o valor de numero.
Fora do escopo, é impresso no console o resultado do array numero1 e numero2.

acrescentando pela revisão: As saídas seriam -10 e 1590.

*/

/* Exercícios de lógica de programação - Exercício 1

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 

...logo:
const booleano3 = !false
const booleano4 = !true;

a) true && false && false = false

b) (true && false) || !true = false

c) (false || !false) && (!true || true) = true

d) (false || !false) && !(true && true) = true

e) !(true) && !(true) || (!false && true && true) = true

*/

/* Lógica de programação - Exercício 2

O código não funciona porque a variável quantidadeNumerosPares não foi definida, e mesmo se fosse definida com qualquer número, entraria em um loop infinito digno de travar o console, pois o i nunca atenderia a condição solicitada.
Não foi definido nenhum incremento e o console só imprimiria o valor de i multiplicado por 2, e queremos que seja impresso os números pares de acordo com o valor definido na variável inicial.

Uma das resoluções poderia ser:

const quantidadeDeNumerosPares = 3;

for (let i = 0; i < quantidadeDeNumerosPares; i++) {
console.log (i * 2);
}

*/

/* Lógica de programação - Exercício 3 

function trigonometria(a, b, c) {

    if (a === b && a === c) {
        return "Equilátero"
    } else if (a === b && a !== c || b === c && b !== a || a === c && a !== b) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

*/

/* Lógica de programação - Exercício 4

function testandoNumeros (a, b) {

    if (a > b) {
        console.log("O maior é: " + a)
    } else {
            console.log("O maior é: " + b)
        }

        if ((a % b) === 0) {
            console.log(a + " é divisível por " + b)
        } else {
            console.log(a + " não é divisível por " + b)
        }
            if ((a - b) < 0) {
                console.log("A diferença entre eles é " + ((a - b) * -1))
            } else {
                console.log("A diferença entre eles é " + (a - b))
            }
}

console.log(testandoNumeros(15, 30))

*/

/* Exercícios de funções - Exercício 1 

const array = [3, 4, 2, 6, 6, 8, 1, 9, 8, 2, 1, 13, 2358, -15, -13]
imprimeMaiorEMenor(array);

function imprimeMaiorEMenor(meuArray) {

    let segundoMaior = 0;
    let segundoMenor = 0;

    let indicadorDoMaior = true;
    let indicadorDoMenor = true;

    let arraySemMaiorEMenor = [];

    for (let i = 0; i < meuArray.length; i++) {
    
        //indicadores começam com valor true para cada elemento a ser testado
        indicadorDoMaior = true;
        indicadorDoMenor = true;
        
        for (let j = 0; j < meuArray.length; j++) {
            
            if (i !== j) {
                if(meuArray[j] > meuArray[i]) {
                    indicadorDoMaior = false;
                } 
                
                if (meuArray[j] < meuArray[i]) {
                    indicadorDoMenor = false;
                }
            }
        }

        if (!indicadorDoMaior && !indicadorDoMenor ) {
            arraySemMaiorEMenor.push(meuArray[i]);
        }
    }

    for (let i = 0; i < arraySemMaiorEMenor.length; i++) {
        indicadorDoMaior = true;
        indicadorDoMenor = true;
        
        for (let j = 0; j < arraySemMaiorEMenor.length; j++) {
            
            if (i !== j) {
                if(arraySemMaiorEMenor[j] > arraySemMaiorEMenor[i]) {
                    indicadorDoMaior = false;
                } 
                
                if (arraySemMaiorEMenor[j] < arraySemMaiorEMenor[i]) {
                    indicadorDoMenor = false;
                }
            }
        }

        if (indicadorDoMaior) {
            segundoMaior = arraySemMaiorEMenor[i];
        }

        if (indicadorDoMenor) {
            segundoMenor = arraySemMaiorEMenor[i];
        }
    }

    console.log(segundoMaior);
    console.log(segundoMenor);
}

*/

/* Exercícios de funções - Exercício 2

const sayHello = () => alert("Hello, LaBeNu! :)");

sayHello();

*/

/* Exercícios de objetos - Exercício 1

O array é basicamente uma estrutura capaz de armazenar um conjunto de valores. Cada um dos seus elementos possuem um índice e são enumerados sequencialmente.
Pode ser utilizado para atualizar o valor de um item que já existe, remover elementos, acrescentar um novo e etc.

O objeto é um tipo especial de variável que armazena propriedades (ex.: nome, idade, endereço; sempre uma associação entre uma chave e um valor) e métodos(funções).
Em JavaScript, praticamente qualquer tipo de dado é um objeto.

*/


/* Exercícios de objetos - Exercício 2

function criaRetangulo(lado1, lado2) {
    const meuRetangulo = {
        largura: lado1,
        altura: lado2,
        perímetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }

    return meuRetangulo
}

*/


/*  Exercícios de objetos - Exercício 3

const filmeFavorito = {
    titulo: "Matrix",
    ano: 1999,
    diretor: "Lana Wachowski",
    elenco: ["Keanu Reeves", "Carrie-Ane Moss", "Laurence Fishburne", "Hugo Weaving"]
}

console.log("Venha assistir ao filme " + filmeFavorito.titulo + ", de " + filmeFavorito.ano + ", dirigido por " + filmeFavorito.diretor + " e estrelado por " + filmeFavorito.elenco)

*/


/*  Exercícios de objetos - Exercício 4

const pessoa = {
    nome: "Maria",
    idade: "47",
    email: "maria@gmail.com",
    endereco: "Rua José Cândido, 90"
}

function anonimizarPessoa(pessoa) {
    const anon = {
        ...pessoa,
	nome: "Anônimo"
    }
    
    return anon
}

*/


/* Funções de array - Exercício 1

1. Laço for:

let array = [];
for(let i = 0; i < array.length; i++) {};


2. For... of:

for(let numero of array) {};


3. While:

while(i < array.length) {i++};


*/


/* Funções de array - Exercício 2

const arrayPessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const pessoasAdultas = arrayPessoas.filter(filtrandoIdade => {
    return filtrandoIdade.idade >= 20
})

console.log(pessoasAdultas)


const criancasEAdolescentes = arrayPessoas.filter(filtrandoIdade => {
    return filtrandoIdade.idade < 20
})

console.log(criancasEAdolescentes)

*/


/* Funções de array - Exercício 3

const array = [1, 2, 3, 4, 5, 6]

//questão A. array que retorna todas as entradas multiplicadas por 2:
const multiplicadosPorDois = array.map((numero, idx, arr) => {
	return numero * 2;
})

console.log(multiplicadosPorDois)


//questão B. array que retorna com as entradas multiplicadas por 3 e como strings:
const multiplicadosPorTres = array.map((numero, idx, arr) => {
    return String(numero * 3);
})

console.log(multiplicadosPorTres)


//questão C. retorne um array de strings dizendo: "${número} é par/impar":
const parOuImparStrings = array.map((numero, idx, arr) => {
    if(numero % 2 === 0) {
        return numero + " é par"
    }
    else {
        return numero + " é impar"
    }
})

console.log(parOuImparStrings)

*/


/* Funções de array - Exercício 4
const pessoasFila = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

//questão A. devolva outro array somente com as pessoas que tem permissão de entrar no brinquedo:
const entradaPermitida = pessoasFila.filter(pessoa => {
    return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
})

console.log(entradaPermitida)


//questão B. devolva outro array somente com as pessoas que não podem entrar no brinquedo:
const entradaBloqueada = pessoasFila.filter(pessoa => {
    return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60;
})

console.log(entradaBloqueada)

*/


/* Funções de array - Exercício 5

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const enviarMensagem = consultas.map((consulta) => {
    let pronomeTratamento = "";
    let comoLembrar= "";

    if(consulta.genero === "feminino") {
        pronomeTratamento = "Sra. ";
        comoLembrar = "lembrá-la";
    }
    else {
        pronomeTratamento = "Sr. ";
        comoLembrar = "lembrá-lo"
    }

    if(consulta.cancelada === false) {
        return `Olá, ${pronomeTratamento} ${consulta.nome}. Estamos enviando esta mensagem para ` + `${comoLembrar} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    }
    else {
        return `Olá, ${pronomeTratamento} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
    }

})

console.log(enviarMensagem)

*/


/* Funções de array - Exercício 6

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

// criar função que receba um array com os objetos do tipo acima e atualize o saldo total individual de cada um, sem criar um novo array.
function totalCompras(meuArray) {
    let valorTotal = 0;
    meuArray.forEach((compra) => {
        valorTotal += compra
    })
    return valorTotal
}

contas.forEach((cliente) => {
    let somaCompras = totalCompras(cliente.compras)
    cliente.saldoTotal -= somaCompras
})

console.log(contas)

*/
