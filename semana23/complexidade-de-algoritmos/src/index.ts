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

