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
        matchingCharQuantity >= (original.length -1)
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

console.log(stringCompression("aabb"));
console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("accurate"));
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"));
