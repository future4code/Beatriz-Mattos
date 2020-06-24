import * as moment from 'moment';
//                  *Exercício 1*

//Vamos começar criando alguns eventos diretamente no nosso código. A primeira tarefa para isso, quando estamos usando Typescript, é definir uma modelagem dos nosso eventos, ou seja, pensar quais propriedades os nossos eventos devem ter.

//a) Crie um tipo para representar um evento. Ele deve possuir: um nome, uma descrição,  uma data de início (com dia, mês, ano, e hora) e uma data de fim.  Ambas as datas devem ser do tipo moment.Moment.

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

//b) Agora, crie um array no escopo global do seu código para representar todos os eventos da agenda. Coloque, nele, ao menos dois eventos.
const allEvents: event[] = [
    {
        name: 'Warm-up + challenge',
        description: 'Pela manhã, resolvo exercícios e pesquiso respostas para os desafios relacionados à aula que está por vir',
        startAt: moment('24/06/2020 08:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment('24/06/2020 09:00', 'DD/MM/YYYY HH:mm')
    },
    {
		name: 'Aula',
		description: 'Aula sobre os conceitos introdutórios de back-end - módulo 4',
		startAt: moment('24/06/2020 09:02', 'DD/MM/YYYY HH:mm'),
	 	finishAt: moment('24/06/2020 11:40', 'DD/MM/YYYY HH:mm')
    },
    {
		name: 'Cochilo pós-aula',
		description: 'Muito importante para revitalizar o corpo',
		startAt: moment('24/06/2020 11:40', 'DD/MM/YYYY HH:mm'),
	 	finishAt: moment('24/06/2020 12:40', 'DD/MM/YYYY HH:mm')
    }
]

//console.log(allEvents)