//                  *Resoluções e respostas do exercício 2*

//Faça uma função que receba dois números como parâmetros e
//a) Imprima a soma desses números
//b) Imprima a subtração desses números
//c) Imprima a multiplicação desses números
//d) Imprima a qual deles é o maior

function myNumbers(a: number, b: number): void {
    let sum: number = a + b

    let subtraction: number = a - b

    let multiplication: number = a * b

    let highestNumber: number
    if (a > b)
    {
        highestNumber = a
    }
    else
    {
        highestNumber = b
    }

    console.log(" A: ", sum, "/ B: ", subtraction, "/ C: ", multiplication, "/ D: ", highestNumber)
}

myNumbers(7, 30)
