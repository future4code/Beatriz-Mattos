/* Exercício 1 */

const isOneEdit = (original: string, comparision: string): boolean => {
    if (comparision.length > (original.length + 1) || comparision.length < (original.length - 1)) {
        return false;
    };

    let matchingCharQuantity = 0;

    for (const char of comparision) {
        if (original.indexOf(char) !== -1) {
            matchingCharQuantity++;
        };
    };

    return (
        matchingCharQuantity <= (original.length + 1) &&
        matchingCharQuantity >= (original.length - 1)
    );
};

// console.log(isOneEdit("banana", "banan"));
// console.log(isOneEdit("banana", "bananak"));
// console.log(isOneEdit("banana", "panana"));
// console.log(isOneEdit("banana", "bananaaa"));


/* Exercício 2 */

const stringCompression = (input: string): string => {
    const substrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }

        charCount++;
    };

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key
    };

    /*Caso o resultado final tenha tamanho maior do que a string inicial, seu programa deve retornar a string inicial */
    return result.length > input.length ? input : result;
};

// console.log(stringCompression("aabb"));
// console.log(stringCompression("aabcccccaaa"));
// console.log(stringCompression("accurate"));
// console.log(stringCompression("escola"));
// console.log(stringCompression("accuraaaaaaaaaate"));


/* Exercício 3 */

/* a) A matriz é um array dentro da posição de outro array, como uma tabela que abriga um array em cada linha. Logo, para representarmos uma matriz em TypeScript, podemos representar como um array de arrays de número. */
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

/* b) Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. */
const replaceMatrixValue = (matrix: number[][], rowIndex: number, columnIndex: number, value: number): void => {
    /* Essa função deve alterar o elemento da linha e coluna em questão pelo valor passado. Caso não tenha nenhum valor nos índices passados, retorne um erro. */
    if (matrix[rowIndex] === undefined && matrix[rowIndex][columnIndex] === undefined) {
        throw new Error("Out of matrix range")
    };

    matrix[rowIndex][columnIndex] = value;
};


/* Exercício 4 */

/* a. Implemente uma função que receba uma matriz e imprima, no console, todos os seus elementos */
const printMatrix = (matrix: number[][]): void => {
    for (const row of matrix) {
        for (const element of row) {
            console.log(element)
        }
    };
};


/* b. Implemente uma função que receba duas matrizes e devolva a soma delas */
const sumMatrix = (m1: number[][], m2: number[][]): number[][] => {
    const newMatrix: number[][] = [];

    if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
        throw new Error("Matrix dimensions must be equal")
    };

    const rowSize = m1[0].length;
    const columnSize = m2[0].length;

    for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = [];
        for (let j = 0; j < columnSize; j++) {
            newMatrixRow.push(m1[i][j] + m2[i][j]);
        }
        newMatrix.push(newMatrixRow);
    }

    return newMatrix;
};


/* c. Implemente uma função que receba uma matriz e devolva a sua matriz transposta */

const transposeMatrix = (m: number[][]): number[][] => {
    const transposed: number[][] = [];
    if (!m.length) {
        throw new Error("Matriz inválida");
    }
    for (let j = 0; j < m[0].length; j++) {
        let row = [];
        for (let i = 0; i < m.length; i++) {
            row.push(m[i][j]);
        }
        transposed.push(row);
    }
    return transposed;
};

/* d. Implemente uma função que receba duas matrizes e devolva a multiplicação delas */

const multiplyMatrix = (m1: number[][], m2: number[][]): number[][] => {
    const result: number[][] = [];

    if (m1[0].length !== m2[0].length) {
        throw new Error("Invalid matrices")
    };

    for (let i = 0; i < m1.length; i++) {
        let rowResult: number[] = [];

        for (let j = 0; j < m2[0].length; j++) {
            let sumResult = 0;

            for (let k = 0; k < m1[0].length; k++) {
                sumResult += m1[i][k] * m2[k][j];
            }

            rowResult.push(sumResult);
        }

        result.push(rowResult);
    }

    return result;
};


/* Exercício 5 */
/* [Amazon] Considere que você tenha uma matriz de números cujas linhas e colunas estejam ordenadas da menor para a maior. Determine a quantidade de números negativos que há dentro da matriz. */

/* A seguinte matriz está ordenada (em relação às linhas e as colunas). A quantidade de números negativos é 4 */
[
    [-3, -2, -1, 1],
    [-2, 2, 3, 4],
    [4, 5, 7, 8]
]

const findNegativeNumbersInMatrix = (matrix: number[][]): number => {
    let count = 0;
    let row = 0;
    let column = matrix[0].length -1;

    while (row < matrix.length && column >= 0) {

        if (matrix[row][column] < 0) {
            count += column + 1;
            row++;

        } else {
            column--;
        }
    }

    return count;
};