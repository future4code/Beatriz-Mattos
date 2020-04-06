          /* Exercício 1 
a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
resposta: []

b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
resposta: (6) [0, 1, 0, 1, 2, 3]

c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
resposta: (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

*/ 

                  /* Exercício 2
a. Explicite quais são as saídas impressas no console    
resposta:              
0 (retorna a posição da string "Darvas" no arrayDeNomes)
2 (retorna a posição da string "João" no arrayDeNomes)
undefined (retorna 'undefined' pois a string "Paula" não foi definida no arrayDeNomes)

b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
resposta: Sim, funcionaria.
                  
*/

                  /* Exercício 3
resposta: A função incrementa o arrayFinal a partir da soma e multiplicação das variáveis resultadoA e resultadoB; um nome melhor para essa função poderia ser adicaoMultiplicacaoResultados.                  
                  
*/

                  /* Exercício 4
a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro */
//resposta:
let anosHumanos = (idade) => {
  let idadeCachorro = idade * 7;
    return idadeCachorro
}
    
console.log(anosHumanos(4))

/* b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template: Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante. */
//resposta:
function apresentacaoPessoa (nome, idade, endereco, estudante) {
  if (estudante === true) {
    return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante.");
  } else {
    return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e NÃO sou estudante.");
  }
}

apresentacaoPessoa("Bia", 23, "Rua Jugurtha Lourival Glória 165", true)

          /* Exercício 5 */
//resposta:
let descobrirSeculo = (ano) => {

  if (ano >= 1001 && ano <= 1100) {
    return "O ano " + ano + " pertence ao século XI.";

  } else if (ano >= 1101 && ano <= 1200) {
      return "O ano " + ano + " pertence ao século XII.";

  } else if (ano >= 1201 && ano <= 1300) {
      return "O ano " + ano + " pertence ao século XIII.";

  } else if(ano >= 1301 && ano <= 1400){
      return "O ano " + ano + " pertence ao século XIV.";

  } else if(ano >= 1401 && ano <= 1500) {
      return "O ano " + ano + " pertence ao século XV.";

  } else if(ano >= 1501 && ano <= 1600) {
      return "O ano " + ano + " pertence ao século XVI.";

  } else if(ano >= 1601 && ano <= 1700) {
      return "O ano " + ano + " pertence ao século XVII.";

  } else if(ano >= 1701 && ano <= 1800) {
      return "O ano " + ano + " pertence ao século XVIII.";

  } else if(ano >= 1801 && ano <= 1900) {
      return "O ano " + ano + " pertence ao século XIX.";

  } else if(ano >= 1901 && ano <= 2000) {
      return "O ano " + ano + " pertence ao século XX.";

  } else if(ano >= 2001 && ano <= 2100) {
      return "O ano " + ano + " pertence ao século XXI.";

  } else {
      return "Ano inválido";
  }
}

          /* Exercício 6
a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele */
//resposta:
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

const elementosArray = (array) => {
  return array.length;
}

console.log(elementosArray(array))

/*b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não */
//resposta:
function parOuImpar (numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/*c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele*/
//resposta:
let devolvePares = (array) => {
  const numerosPares = [];
  for (let numero of array) {
    let numeroPar = numero % 2;
    if (numeroPar === 0) {
      numerosPares.push(numeroPar)
    }
  }
    return "O array possui " +numerosPares.lenght+ " números pares."
}


/*d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par*/
//resposta:
let devolvePares = (array) => {
  const numerosPares = [];
  for (let numero of array) {
    if (parOuImpar(numero)){
      numerosPares.push(numero)
    }
  }
}