//                  *Resoluções e respostas do exercício 3*

//Faça uma função que receba um array de números e retorne um objeto que tenha as seguintes informações:
//a quantidade de números que há no array
//a quantidade de números ímpares no array
//a soma de todos os elementos do array
type result = {
    quantity: number,
    oddNumbers: number,
    sumOfAllElements: number
}

function myFunction(array: number[]): void {
    const quantity: number = array.length

    const oddNumbers: number[] = array.filter(odd => {
        return odd % 2 !== 0
    })

}

//exercício a concluir