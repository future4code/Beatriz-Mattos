/* Exercício 1 */
/* Escreva uma função recursiva que.. a) Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente */
const printNumbers = (n: number) => {
    if(n >= 0) {
        printNumbers(n - 1);
        console.log(n);
    }
};

//printNumbers(7);


/* b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente */
const printDecrescentNumbers = (n: number) => {
    if(n >= 0) {
        console.log(n);
        printDecrescentNumbers(n - 1);
    }
};

//printDecrescentNumbers(7);


/* Exercício 2 */
/* Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n */
export const calculateSumTo = (n: number, sum: number = 0): number => {
    if(n === 0) {
        return sum;
    }

    return calculateSumTo(n - 1, sum + n);
};

//console.log(calculateSumTo(3));

/* Exercício 3 */
/* Escreva uma função recursiva que consiga imprimir todos os elementos de um array */
export const printArray = (arr: number[], i: number = arr.length -1) => {
    if(i >= 0) {
        printArray(arr, i - 1);
        console.log(`Elemento ${i}: `, arr[i]);
    }
};

const array = [3, 6, 9, 12];
printArray(array);