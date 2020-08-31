/* 1 -> Determine a complexidade dos seguintes algoritmos: */

const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: { [index: string]: boolean } = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
    }
    return null;
}
/* Resposta: Como o algoritmo acima tem um input de tamanho n (que pode variar), a complexidade é de O(n) */


/* 2 */
export const func = (
    source: string,
    comparison: string
): boolean => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {
        return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
        if (source !== comparison) {
            commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );
};
/* Sendo n o tamanho da string comparison, a complexidade é de O(n) */


/* 3 */
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): void => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
};
/* O algoritmo acima depende das entradas de arrays, mas em nenhum momento ocorre uma iteração no array. Como não tem loops, a complexidade é de O(1) */


/* 4 */
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
            return true;
        }
    }
    return false;
}
/* A função indexOf percorre o array tentando achar um index, caracterizando uma complexidade O(n), mas como também está dentro de um loop, multiplicamos pelo loop externo, gerando uma complexidade quadrática (O(n²)) */


/* 5 */
/* Da maior eficiência/performance para a menor: 3 -> 1 = 2 -> 4 */

/* 6 */
function product(a: number, b: number): number {
    let sum = 0;
    for (let i = 0; i < b; i++) {
        sum += a;
    }
    return sum
}
/* Ocorre uma iteração com o elemento b, logo a complexidade é de O(b) */

/* 7 */
function mod(a: number, b: number): number {
    if (b <= a) {
        return -1;
    }
    let div = a / b;
    return a - div * b;
}
/* Como não há loops que dependam da entrada, a complexidade é de O(1) */

/* 8 */
function copyArray(array: number[]): number[] {
    let copy: number[] = [];
    for (const value of array) {
        copy = appendToNew(copy, value);
    }
    return copy;
}

function appendToNew(array: number[], value: number) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    newArray.push(value);
    return newArray;
}
/* Sendo n o tamanho do array, a complexidade de appendToNew é O(n); sendo n o tamanho do array, a complexidade de appendToNew é O(n²), bem como no exercício 4 */