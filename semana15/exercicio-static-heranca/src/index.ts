                                        //Exercícios\\
//Exercício 1:
//Analise a classe User. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 
//a. Seria possível imprimir a senha (`password`) atrelada a essa instância?
//Não, a menos que eu crie um getPassword() dentro do constructor. Se utilizar 'console.log(createUser.password)' não funciona porque está como private.

//b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//Apenas uma vez, pois só criei uma instância.

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return `Olá, ${this.name}. Tenha um bom dia! :)`
  }
}

const createUser: User = new User("01", "bia@gmail.com", "Bia", "123456");
//console.log(createUser.getEmail());

//Exercício 2
//Analise a Customer. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o Customer é uma subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends na declaração da classe Customer; e, em seu construtor, foi usado o super.
//a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
//Apenas uma vez.

//b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//Duas vezes, pois a classe Customer é subclasse classe User. Logo o Constructor do Customer chama o Constructor do User através do super().

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(id: string, email: string, name: string, password: string, creditCard: string) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }

}

const createCustomer: Customer = new Customer("02", "biziquinha@email.com", "Elza", "123456", "1111 1111 1111")
//console.log(createCustomer.getCreditCard())

//Exercício 3
//Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard). Perceba que as propriedades públicas da classe pai (User) foram "herdadas" pela classe filha (Customer).
// console.log(createCustomer.introduceYourself(),
//   "\nId:", createCustomer.getId(),
//   "\nNome: ", createCustomer.getName(),
//   "\nE-mail: ", createCustomer.getEmail(),
//   "\nValor total da compra: ",
//   createCustomer.purchaseTotal
// )
//a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//Não, pois é privado. A menos que eu crie um getPassword() dentro do Constructor da classe User.

//Exercícios 4 e 5
//Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método.
//Ambos foram feitos acima.

//Exercício 6
//Agora, vamos criar uma nova classe: a que representa os funcionários (Employee). Ela deve ser uma classe filha da classe User. Além disso,  ela deve possuir as propriedades: data de admissão (admissionDate) e salário base (baseSalary). Como elas são informações sensíveis, não é recomendável que sejam públicas. Então, iremos declará-las com o encapsulador protected. Adicione dois métodos getters: um para acessar o admissionDate e outro para o baseSalary. Crie uma instância da classe Employee.
class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(id: string, email: string, name: string, password: string, admissionDate: string, baseSalary: number) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Employee")
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + 400;
  }
}

const createEmployee: Employee = new Employee("03", "funcionaria@email.com", "Melissa", "654321", "30/06/2020", 1530);
// console.log(createEmployee.introduceYourself(),
//   "\nId:", createEmployee.getId(),
//   "\nNome: ", createEmployee.getName(),
//   "\nE-mail: ", createEmployee.getEmail(),
//   "\nDia de admissão: ",
//   createEmployee.getAdmissionDate(),
//   "\nSalário base: ",
//   createEmployee.getBaseSalary(),
//   "\nSalário com benefício: ",
//   createEmployee.calculateTotalSalary()
// )

//a. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//A mensagem foi impressa três vezes.

//b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
//Todas as que herdei da classe User(pai) + os dados que criei para a classe Employee.

//Exercício 7
//Adicione um método público à classe Employee: calculateTotalSalary ("calcula o salário total"). Ele deve retornar o valor do baseSalary somado com os benefícios do funcionário, considere que todos possuem o mesmo valor de R$400 de benefícios. Faça os testes com a instância que você já criou.
//feito acima

//Exercício 8
//Agora, vamos criar a última classe do nosso sistema ( 🥳): Seller (vendedor). Todo vendedor, na vida real, é um funcionário da nossa loja certo? Então, a classe vendedor deve ser filha da classe Employee. Perceba que agora estamos criando uma classe filha (Seller) cuja classe pai (Employee)  é uma classe filha da classe User. 

class Seller extends Employee {
  private salesQuantity: number = 0;

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public setSalesQuantity(quantity: number): void {
    this.salesQuantity = quantity;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + 400 + this.salesQuantity * 5;
  }
}

//a. Crie uma instância da classe Seller. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?
//Os mesmos parâmetros do componente pai (id, e-mail, nome, senha, data de admissão e salário).

const createSeller: Seller = new Seller("04", "vendedor@email.com", "Ulisses", "123123", "20/06/2020", 1550);

//b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?

// console.log(createSeller.introduceYourself(),
//   "\nId:", createSeller.getId(),
//   "\nNome: ", createSeller.getName(),
//   "\nE-mail: ", createSeller.getEmail(),
//   "\nDia de admissão: ",
//   createSeller.getAdmissionDate(),
//   "\nSalário base: ",
//   createSeller.getBaseSalary(),
//   "\nSalário com benefício: ",
//   createSeller.calculateTotalSalary()
// )

//Exercício 9
//Adicione uma nova propriedade para a classe Seller: salesQuantity (quantidade de vendas). Ela deve ser um number, ser privada, começar com o valor 0 e não pode estar no construtor. Por ser privada, crie um método setter setSalesQuantity que permita atualizar o valor dessa propriedade.
//feito acima

//a. Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?
//Não, retornou como undefined.
// const test = createSeller.setSalesQuantity(88);
// console.log(test);

//Exercício 10
//Uma classe filha consegue sobrescrever  (override) um método da sua classe pai, se ela tiver acesso a ele (ou seja, se for  protected ou public). Para exemplificar isso, vamos pedir para que você altere a implementação da função calculateTotalSalary na classe Seller. Considere que todos os vendedores recebam a mesma comissão de: R$5 por venda.
//a. Crie um novo vendedor. Atribua a ele um valor para a salesQuantity. Convoque a função calculateTotalSalary e  imprima no terminal o valor. O que foi impresso no terminal? Por quê?
const createNewSeller: Seller = new Seller("05", "novo-vendedor@email.com", "Nestor", "777777", "25/06/2020", 1550);
createNewSeller.setSalesQuantity(6);
console.log(createNewSeller.calculateTotalSalary());