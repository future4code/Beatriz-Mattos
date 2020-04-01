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

//a. Arrays são objetos semelhantes a uma lista, servem para armazenar e acessar vários valores em uma única variável, como: let meuArray = [1, 2, ..., n]

//b. [i]

//c. console.log(meuArray.length)

//d.
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
console.log("30°C convertido para Fahrenheit é "+grausFahrenheit+"°F, e convertido para Kelvin é "+grausKelvin+". :D")

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let temperatura = prompt("Insira a temperatura em Celsius que convertemos em Fahrenheit e Kelvin!")
const conversaoFahrenheit = temperatura*9/5+32;
const conversaoKelvin = (conversaoFahrenheit-32)*5/9+273.15;
console.log("A temperatura é "+conversaoFahrenheit+" em Fahrenheit e "+conversaoKelvin+" em Kelvin.")


//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte):
let nome = prompt("Quero te conhecer melhor. Digite o seu nome!");
console.log("Olá, "+nome+"! Seja bem vindo ao console do Chrome!");

let idade = prompt("Como ainda não posso utilizar a função if...else, preciso continuar com as perguntas simples. E a sua idade?");
console.log("Você tem "+idade+" anos? Está ficando velho!");

let corPreferida = prompt("E qual sua cor preferida?");
console.log("Que bom gosto, "+nome+", eu também prefiro "+corPreferida+".");

let pratoPreferido = prompt("Estamos na hora da janta. Qual é o seu prato preferido?");
console.log(pratoPreferido+"? Agora você me deixou com fome!!");

let adeus = prompt("Foi um prazer te conhecer, "+nome+", mas as perguntas terminam aqui. Digite 'até o próximo exercício' para que eu possa cumprir minha função.")
console.log(adeus+"! ;)");


//3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

   // a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
   let consumoEnergia = 280*0.05;
   console.log("O consumo da residência é de R$"+consumoEnergia+" por hora.")

   // b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
    let valorDesconto = consumoEnergia*15/100;
    console.log("O valor com desconto sai por apenas R$"+valorDesconto+".");


  //** Desafios **
    //a. Procure uma forma de converter libra (lb) para quilograma (kg).
        let libraParaQuilograma = 20*0.453592;
        console.log("20lb equivalem a "+libraParaQuilograma+" kg.");

    //b. Procure uma forma de converter onça (oz) para quilograma (kg).
        let oncaParaQuilograma = 10.5*0.0283495;
        console.log("10.5oz equivalem a "+oncaParaQuilograma+" kg.");

    //c. Procure uma forma de converter milha (mi) para metro (m). 
        let milhaParaMetro = 100*1609.34;
        console.log("100mi equivalem a "+milhaParaMetro+" m.");

    //d. Procure uma forma de converter pés (ft) para metro (m).
        let pesParaMetro = 50*0.3048;
        console.log=("50ft equivalem a "+pesParaMetro+" m.");

    //e. Procure uma forma de converter galão (gal) para litro (l).
        let galaoParaLitro = 103.56*3.78541;
        console.log=("103.56gal equivalem a "+galaoParaLitro+" l.");

    //f. Procure uma forma de converter xícara (xic) para litro (l)
        let xicaraParaLitro = 450*0.001;
        console.log=("450xic (ml) equivalem a "+xicaraParaLitro+" l.");

    //g. Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter.
    let milha = prompt("Insira seu valor em milha e o converterei para metro!")
    let resultado = milha*1609.34;
    console.log("Você tem "+resultado+" metros")