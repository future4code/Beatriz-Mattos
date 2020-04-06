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
resposta:
                  
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
let seculo = (ano) => {
if (ano > 900 && ano <= 1000) {
  console.log("O ano " + ano + " pertence ao século X") {
  } else if (ano >= 1001 && ano <= 1100) {
    console.log("O ano " + ano + " pertence ao século XI"){
      else if (ano >= 1101 && ano <= 1200){
        console.log("O ano " + ano + " pertence ao século XII"){
          else if
        }
      }
    }
  }
}