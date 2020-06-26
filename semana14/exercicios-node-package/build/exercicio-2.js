"use strict";
const operacao = process.argv[2];
const primeiroNumero = Number(process.argv[3]);
const segundoNumero = Number(process.argv[4]);
function calculaOperacao(operacao, a, b) {
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
console.log('Resultado: ', calculaOperacao(operacao, primeiroNumero, segundoNumero));
//# sourceMappingURL=exercicio-2.js.map