//                  *Resoluções e respostas do exercício 1*

let minhaString: string = 'Testando string'
//minhaString = 7 //deu erro!
//resposta A: Quando atribuo o número 7 à variável, é apontado o erro 'Type '7' is not assignable to type 'string', pois o tipo foi atribuido como string e não como number.


let meuNumero: number | string = 'testando'
meuNumero = 12 //assim funciona!
//resposta B: Para fazer com que aceite dois tipos, é só colocá-los separados com a sintaxe union type, inserindo uma | entre os tipos


//resolução e resposta E, feito as alterações abaixo
enum RainbowColors {
    c1 = 'violeta',
    c2 = 'anil',
    c3 = 'azul',
    c4 = 'verde',
    c5 = 'amarelo',
    c6 = 'laranja',
    c7 = 'vermelho'
}

//resolução e reposta C: para garantir que o objeto contenha as propriedades necessárias, nós tipamos o objeto da seguinte forma:
type person = {
    name: string,
    age: number,
    favoriteColor: RainbowColors
}


//resolução e resposta D:
const pessoa1: person = {
    name: 'Astrodev',
    age: 29,
    favoriteColor: RainbowColors.c3
}

const pessoa2: person = {
    name: 'Bia',
    age: 23,
    favoriteColor: RainbowColors.c7
}

const pessoa3: person = {
    name: 'Allan',
    age: 25,
    favoriteColor: RainbowColors.c4
}