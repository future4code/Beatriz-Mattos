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

  constructor(id: string, email: string, name: string, password: string){
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
console.log(createUser.getEmail());

