"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const moment = require("moment");
class Transaction {
    constructor(value, description, date = moment().format("DD/MM/YYYY")) {
        this.value = value;
        this.description = description;
        this.date = date;
        this.getValue = () => this.value;
        this.getDescription = () => this.description;
        this.getDate = () => this.date;
    }
}
exports.Transaction = Transaction;
