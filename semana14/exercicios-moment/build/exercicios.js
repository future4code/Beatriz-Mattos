"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const allEvents = [
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
];
const printAllEvents = () => {
    allEvents.forEach(event => {
        const start = event.startAt.format('dddd, DD [de] MMM [de] YYYY, [às] HH:mm');
        const end = event.finishAt.format('DD [de] MMM [de] YYYY, [às] HH:mm');
        const duration = event.finishAt.diff(event.startAt, 'minutes');
        const daysUntilEvent = event.startAt.diff(moment(), 'days');
        console.log(`
            Nome: ${event.name}
            Horário de início: ${start}
            Horário de fim: ${end}
            Descrição: ${event.description}
            Duração em minutos: ${duration}
            Dias até o evento: ${daysUntilEvent}
        `);
    });
};
const createEvent = (name, description, startAt, finishAt) => {
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
};
const addName = process.argv[2];
const addDescription = process.argv[3];
const addStart = moment(process.argv[4], 'DD MM YYYY HH:mm');
const addEnd = moment(process.argv[5], 'DD MM YYYY HH:mm');
//# sourceMappingURL=exercicios.js.map