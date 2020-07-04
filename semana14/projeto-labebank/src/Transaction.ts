import * as moment from 'moment';

export class Transaction {
    constructor(
        private value: number,
        private description: string,
        private date: string = moment().format("DD/MM/YYYY")
    ) {}

    getValue = () => this.value;
    getDescription = () => this.description;
    getDate = () => this.date;
}