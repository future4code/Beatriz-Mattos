                    // EXERCÍCIO 1 //
//Leia o código abaixo:
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"?
// resposta: O código aprova apenas números pares. Se o número inserido for par, imprime no console a mensagem "Passou no teste." e se o número inserido for ímpar, imprime no console a mensagem "Não passou no teste."


                    // // EXERCÍCIO 2 //
// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima?
//resposta: O código acima guarda o nome e preço de todas as frutas do estoque e você pode digitar o nome de qual deseja comprar para conferir o preço.

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//resposta: O preço da fruta  Maçã  é  R$  2.25.

//c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
//resposta: R$24.55

//d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
// resposta: O console imprimiu: O preço da fruta  Pêra  é  R$  5. Logo, tirando o break, o console imprime o valor default para a Pêra.


                    // EXERCÍCIO 3 //
//Leia o código abaixo:
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if (numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

//Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
//resposta: A mensagem no terminal é de erro, pois a variável let foi definida dentro do 'bloco if', logo apresentou-se como se nunca tivesse sido declarada.


          /// EXERCÍCIO 4 ///
//a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

const numero1 = Number(prompt("Insira um número aqui"));
const numero2 = Number(prompt("Insira outro número aqui"));

if (numero1>numero2) {
    console.log("Em ordem descrescente: "+numero1+","+numero2);
} else {
    console.log("Em ordem descrescente: "+numero2+","+numero1);
}

//b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
const numero1 = Number(prompt("Insira o primeiro número aqui"));
const numero2 = Number(prompt("Insira o segundo número aqui"));
const numero3 = Number(prompt("Por fim, insira o último número aqui"));

if (numero1>numero2 && numero1>numero3 && numero2>numero3) {
    console.log("Em ordem descrescente: "+numero1+","+numero2+","+numero3);
} else if (numero1>numero2 && numero1>numero3 && numero2<numero3) {
    console.log("Em ordem descrescente: "+numero1+","+numero3+","+numero2);
} else if (numero1<numero2 && numero1<numero3 && numero2>numero3) {
    console.log("Em ordem descrescente: "+numero2+","+numero3+","+numero1);
} else if (numero1<numero2 && numero1<numero3 && numero2<numero3) {
    console.log("Em ordem descrescente: "+numero3+","+numero2+","+numero1);
} else if (numero2>numero1 && numero2>numero3 && numero1>numero3) {
    console.log("Em ordem descrescente: "+numero2+","+numero1+","+numero3);
} else {
    console.log("Em ordem descrescente: "+numero3+","+numero1+","+numero2);
}


//c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.
numero1 = Number(prompt("Insira um número"));
numero2 = Number(prompt("Insira outro número"));
numero3 = Number(prompt("Insira outro número"));

if ((numero1===numero2) && (numero1===numero3)){
  console.log("Quero um número diferente!")
}

          //EXERCÍCIO 5//
//a. https://imgur.com/a/J9fkOTI

//b.
let ossos = prompt("O animal possui ossos formando seu esqueleto?\n[s/n]");

if (ossos ==="s") {
  let pelos = prompt("O animal tem pêlos?\n[s]");

  if (pelos === "s") {
    let mamifero = prompt("Ele é mamífero?\n[s/n]");

    if (mamifero === "s") {
      let racional = prompt("É racional?\n[s/n]");
      
      if (racional === "s") {
        console.log("O animal é o ser humano!");
      } else if (racional === "n") {
        console.log("Mamífero não-humano.");
      }
    } else if (mamifero === "n") {
      let penas = prompt("Ele possui penas?\n[s/n]");

      if (penas === "s") {
        console.log("Então é uma ave.");
      } else if (penas === "n") {
        let animalTerrestre = prompt("É um animal terrestre?\n[s/n]");

        if (animalTerrestre === "n") {
          console.log("Só pode ser um peixe...");
        } else if (animalTerrestre === "s") {
          let aquatico = prompt("Passou parte da vida em ambiente aquático?\n[s/n]");

          if (aquatico === "s") {
            console.log("É um anfíbio.");
          } else if (aquatico === "n") {
            console.log("É um lindo réptil!!");
          }
        }
      }
    }
  } 
} else if (ossos === "n") {
  console.log("O animal é invertebrado.");
}

//fim