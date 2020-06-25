import * as moment from 'moment';
moment.locale("pt-br");

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
    },
    {
        name: 'Fazer as compras de casa',
        description: 'Prepare a máscara e luvas, e por fim a lista de compras!',
        startAt: moment('28/06/2020 15:40', 'DD/MM/YYYY HH:mm'),
        finishAt: moment('28/06/2020 17:00', 'DD/MM/YYYY HH:mm')
    },
    {
        name: 'Projeto da semana',
        description: 'Dia de muitas alegrias e combustões instantâneas',
        startAt: moment('26/06/2020 10:00', 'DD/MM/YYYY HH:mm'),
        finishAt: moment('26/06/2020 20:00', 'DD/MM/YYYY HH:mm')
    }
]

//console.log(allEvents)



//              *Exercício 2 e 3*

//2.a e 3 - Crie uma função que recebe o array de eventos criado no exercício anterior, e imprime algumas informações sobre cada um no console

const printAllEvents = (): void => {
    allEvents.forEach(event => {
        const start: string = event.startAt.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');

        const end: string = event.finishAt.format('DD [de] MMM [de] YYYY, [às] HH:mm');

        const duration: number = event.finishAt.diff(event.startAt, 'minutes');

        const daysUntilEvent: number = event.startAt.diff(moment(), 'days');

        console.log(`
            Nome: ${event.name}
            Horário de início: ${start}
            Horário de fim: ${end}
            Descrição: ${event.description}
            Duração em minutos: ${duration}
            Dias até o evento: ${daysUntilEvent}
        `)
    })
}

//printAllEvents();

//2.b) Que alterações precisariam ser feitas com as datas e horários caso a festa acontecesse em Londres, Inglaterra?
//resposta: Precisariam ser feitas alterações no moment.locale e o utcOffset.


//                  *Exercício 4*

//Deve ser possível cadastrar um novo evento no seu calendário pessoal, passando o dia com o horário de início, o dia com o horário de fim, o nome do evento e um pequeno texto descritivo.

const createEvent = (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
): void => {
    if (!name || !description || !startAt || !finishAt) {
        console.log('Input inválido!');
        return;
    }

    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");

    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Você só pode adicionar datas para eventos futuros. Tente inserir um evento a partir de nossa data atual.");
        return;
    }
}

// const addName: string = process.argv[2];
// const addDescription: string = process.argv[3];
// const addStart: moment.Moment = moment(process.argv[4], 'DD MM YYYY HH:mm');
// const addEnd: moment.Moment = moment(process.argv[5], 'DD MM YYYY HH:mm');