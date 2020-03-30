//**1. Exercícios de interpretação e escrita de código**
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;


//item A
let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// retorna: a. false

//item B
resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//retorna: b.  false

//item C
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//retorna: c.  true

//item D
resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//retorna: d.  false

//item E
console.log("e. ", typeof resultado)
//retorna: e.  boolean


//**2 - resposta das questões**

//a. O que é `array` e como se declara em `JS`?: Arrays são objetos semelhantes a uma lista, servem para armazenar e acessar vários valores em uma única variável, como: let meuArray = [1, 2, ..., n]

//b. Qual o index inicial de um `array`?: [i]

//c. Como se determinar o tamanho do `array`?: console.log(meuArray.length)

//d. Indique todas as mensagens impressas no console:
let array
console.log('I. ', array)
//retorna: I.  undefined

array = null
console.log('II. ', array)
//retorna: II.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//retorna: III.  11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
//retorna: IV.  3  e  4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//retorna: V.  19  e  9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//retorna: VI.  3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//retorna: VII.  1


//** 1 - Exercícios de escrita de código**

//- Graus Fahrenheit(°F) para Kelvin(K)
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//Graus Celsius(°C) para Graus Fahrenheit (°C)
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let grausKelvin = (77-32)*5/9+273.15;
console.log(grausKelvin+" K")

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let grausFahrenheit = 80*9/5+32;
console.log(grausFahrenheit+" °F")

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
let grausFahrenheit = 30*9/5+32
let grausKelvin = (grausFahrenheit-32)*5/9+273.15;
console.log("30°C convertido para Fahrenheit é "+grausFahrenheit+"°F, e convertido para Kelvin é "+grausKelvin+" K. :D")

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

