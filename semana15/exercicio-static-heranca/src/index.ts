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
console.log(
  "Id:", createCustomer.getId(),
  "\nNome: ", createCustomer.getName(),
  "\nE-mail: ", createCustomer.getEmail(),
  "\nValor total da compra: ",
  createCustomer.purchaseTotal
)
//a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//Não, pois é privado. A menos que eu crie um getPassword() dentro do Constructor da classe User.

