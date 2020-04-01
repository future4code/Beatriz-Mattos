                    // EXERCÍCIO 1 //
//O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)

//resposta: Foi criada uma variável que serve para somar números de 0 até 14. Enquanto a variavel i for menor que 15, é imprimido o valor da variável i somado a 1 (no caso: 0+1+2+3+4+5...+14=105).
//o resultado impresso no console é: 105.



                    // EXERCÍCIO 2 //

//Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

//a. O que o comando `.push` faz?
//resposta: O comando .push acrescenta um novo item ao fim da lista do array.

//b. Qual o valor impresso no console?
//resposta: (4) [10, 15, 25, 30]. Imprimiu todos os itens múltiplos de 5 da lista.

//c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
//resposta: Resultado contendo o valor 3, no caso imprimindo apenas múltiplos de 3: (6) [12, 15, 18, 21, 27, 30]; Resultado contendo o valor 4, no caso imprimindo apenas múltiplos de 4: [12].


                // DESAFIO 1 //
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
//resposta: O programa imprime a quantidade de linhas que o usuário inseriu, no caso, as 4 linhas a seguir:
0
00
000
0000


                    // EXERCÍCIO 3 //
//a. Escreva um programa que devolva o maior e o menor números contidos no array original
const numerosArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = numerosArray [0];
let menor = numerosArray [0];

for (let elemento of numerosArray){
      if (elemento > maior){
        maior = elemento;
    } else if (elemento < menor) {
        menor = elemento;
    }
}

console.log("O maior numero é "+maior+", e o menor número é "+menor+".")


//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let numero of arrayOriginal){
    arrayOriginal.push(numero/10);
}

console.log(arrayOriginal);


//c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let numero of arrayOriginal){
    arrayOriginal.push(numero%2);
}

console.log(arrayOriginal);


//d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"



