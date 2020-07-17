import { User } from './User';
import * as moment from 'moment';

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ) {}

    // public getId(): string {
    //     return this.id;
    // }

    public getAge(): number {
        return moment().diff(this.birthDate, "years");
    }

    // public getName(): string {
    //     return this.name;
    // }

    // public getEmail(): string {
    //     return this.email;
    // }

    // public getHobbies(): string[] {
    //     return this.hobbies;
    // }
}

export const student1 = new Student("01", "Beatriz", "bia@email.com", moment("26/12/1996", "DD/MM/YYYY") , ["Comer bolo", "Beber hidromel", "Amar demais"]);
export const student2 = new Student("02", "Loki", "loki@email.com", moment("16/11/1990", "DD/MM/YYYY") , ["Fazer travessuras", "Assumir a forma que quiser", "Criar intrigas estratégicas"]);
export const student3 = new Student("03", "Njord", "njord@email.com", moment("06/10/1992", "DD/MM/YYYY") , ["Prever o futuro", "Proteger os navegantes", "Assumir a liderança"]);
export const student4 = new Student("04", "Tyr", "tyr@email.com", moment("01/01/1991", "DD/MM/YYYY") , ["Ser justo", "Estar sempre pronto para o combate", "Fazer tudo com uma mão só"]);
