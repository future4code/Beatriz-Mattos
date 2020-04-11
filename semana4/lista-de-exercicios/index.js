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