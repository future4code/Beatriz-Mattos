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

console.log(isOneEdit("banana", "banan"));
console.log(isOneEdit("banana", "bananak"));
console.log(isOneEdit("banana", "panana"));
console.log(isOneEdit("banana", "bananaaa"));

