//                  *Exercício 2*

//Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operacao: string = process.argv[2];
const primeiroNumero: number = Number(process.argv[3]);
const segundoNumero: number = Number(process.argv[4]);

function calculaOperacao(operacao: string, a: number, b: number) {
    switch (operacao) {
        case 'soma':
            return a + b;
            break;

        case 'subt':
            return a - b;
            break;

        case 'mult':
            return a * b;
            break;

        case 'div':
            return a / b;
            break;

        default:
            break;
    }
}

console.log('Resultado: ', calculaOperacao(operacao, primeiroNumero, segundoNumero))