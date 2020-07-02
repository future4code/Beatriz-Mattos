import { Client } from './Client';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';
import { ClientManager } from './ClientManager';
import { CommercialClient } from './CommercialClient';
import { IndustrialClient } from './IndustrialClient';
import { ResidentialClient } from './ResidentialClient';

//Exercício 1
const newClient: Client = {
    name: "Netuno",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 7;
    }
}

//console.log(newClient)
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
// const newResidence: Residence = new Residence(2, "08797-482");
// console.log(`Número de moradores: ${newResidence.getResidentsQuantity()} \nCep residência: ${newResidence.getCep()}`);

// const newCommerce: Commerce = new Commerce(3, "04839-234");
// console.log(`Quantidade de andares: ${newCommerce.getFloorsQuantity()} \nCep comércio: ${newCommerce.getCep()}`);

// const newIndustry: Industry = new Industry(70, "07394-819");
// console.log(`Quantidade de máquinas: ${newIndustry.getMachinesQuantity()} \nCep indústria: ${newIndustry.getCep()}`);

//Exercício 4
//a. Que métodos e propriedades essa classe possui? Por quê?
//A classe ResidentialClient herdou os métodos da classe Residence e implementou a função calculateBill() criada na interface Client.

//Exercício 5
//a. Quais as semelhanças dessa classe com a ResidentialClient?
//Ambas implementam a interface Client.

//b. Quais as diferenças dessa classe com a ResidentialClient?
//ResidentialClient é filho da classe Residence; CommmercialClient é filho da classe Commerce.

//Exercício 6
//a. De qual classe a IndustrialClient deve ser filha? Por quê?
//A IndustrialClient deve ser filha da classe Industry.

//b. Que interface a IndustrialClient implementa? Por quê?
//Implementa a classe Client, pois é um dos três tipos de cliente que temos em nossa aplicação.

//c. Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
//

//Exercício 7 (implementado no código)

//Exercício 8
const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Valquíria", 77, 100, "24634597880", 1, "09616-380");
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Comércio maneiro", 165, 250, "3294673643", 3, "07626-599");
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Indústria maneira", 32, 1000, 6, 49, "40917-480");
clientManager.registerClient(industrialClient)

console.log(clientManager.getClientsQuantity());