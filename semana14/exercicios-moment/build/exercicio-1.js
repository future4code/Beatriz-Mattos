"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
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
    }
];
console.log(allEvents, 'Aula');
//# sourceMappingURL=exercicio-1.js.map