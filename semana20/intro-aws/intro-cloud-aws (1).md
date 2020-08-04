## Exercício 1
1.4) O mais fácil foi instalar os pacotes mySQL e configurar o script de segurança;
 A parte mais difícil foi entender como esse script funciona, entrar como root e o funcionamento de tudo. "O usuário root é autenticado pelo plugin auth_socket por padrão" não me fez entender muita coisa;

## Exercício 2
2.1)  Criar uma nova máquina ou acessar a EC2 já criada, clonar o repositório e definir o acesso das portas ao mundo. Criar um build e fazer o deploy assim como ~~sofríamos~~ digo, fazíamos no módulo frontend.

2.2) Escolhi o Rappi4, por ser o trabalho final de front end e um dos que mais me senti feliz em fazer parte.

2.3) ```ssh -i beatriz_aws_ec2.pem ubuntu@18.204.8.66```

2.4) Comandos:
> ```git clone https://github.com/future4code/julian-rappi4B``` para clonar o repositório dentro da máquina EC2;

> ```cd julian-rappi4B``` para abrir a pasta do projeto;

> ```npm install``` para instalar as dependências do projeto;

>> ```npm run build && cd build``` para executar a preparação do build e abrir a pasta build;

>> ```sudo apt update``` para atualizar a lista de pacotes;

>> ``` sudo apt install python ``` para poder acessar sem colocar a porta com o python para nos auxiliar;

>> ``` sudo python -mSimpleHTTPServer 80 ``` para rodar na porta 80;

e tudo rodou na ```ec2-18-204-8-66.compute-1.amazonaws.com```

2.6)
```
npm run build
cd build
sudo python -mSimpleHTTPServer 80
```

2.7) No exercício em aula, foi criado um app react diretamente na máquina EC2, nesse exercício utilizei um app já existente, clonado do github e instalado na máquina.