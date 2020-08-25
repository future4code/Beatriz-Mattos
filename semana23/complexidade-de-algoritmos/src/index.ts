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


