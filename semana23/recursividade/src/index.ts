/* Exercício 1 */
/* Escreva uma função recursiva que.. a) Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente */
const printNumbers = (n: number) => {
    if(n >= 0) {
        printNumbers(n - 1);
        console.log(n);
    }
};

console.log(printNumbers(7));