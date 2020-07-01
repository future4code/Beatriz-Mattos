import { Client } from './Client';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';

//Exercício 1
const newClient: Client = {
    name: "Netuno",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 7;
    }
}

console.log(newClient)
//console.log(newClient.calculateBill())

//a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//Consegui imprimir todas, menos o retorno da calculateBill.

//Exercício 2
//a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//const createPlace: Place = new Place("77777-777")
//Ao tentar criar a instância acima, pareceu o erro "Cannot create an instance of an abstract class"

//b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
//Para conseguir efetivamente criar uma instância de classe abstrata, precisamos declarar uma classe filha e criar uma instância da mesma.

//Exercício 3
//instâncias da classe Place:
const newResidence: Residence = new Residence(2, "08797-482");
console.log(`Número de moradores: ${newResidence.getResidentsQuantity()} \nCep residência: ${newResidence.getCep()}`);

const newCommerce: Commerce = new Commerce(3, "04839-234");
console.log(`Quantidade de andares: ${newCommerce.getFloorsQuantity()} \nCep comércio: ${newCommerce.getCep()}`);

const newIndustry: Industry = new Industry(70, "07394-819");
console.log(`Quantidade de máquinas: ${newIndustry.getMachinesQuantity()} \nCep indústria: ${newIndustry.getCep()}`);

//Exercício 4
//a. Que métodos e propriedades essa classe possui? Por quê?
//A classe ResidentialClient herdou os métodos da classe Residence e implementou a função calculateBill() criada na interface Client.

