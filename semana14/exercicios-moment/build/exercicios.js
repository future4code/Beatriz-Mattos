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
        const start = event.startAt.format('DD/MM/YYYY HH:mm');
        const end = event.finishAt.format('DD/MM/YYYY HH:mm');
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
printAllEvents();
//# sourceMappingURL=exercicios.js.map