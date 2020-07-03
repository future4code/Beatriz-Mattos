import { User } from './User';
import * as moment from 'moment';

enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND"
}

export class Teacher implements User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public specialties: TEACHER_SPECIALTY[]
    ) {}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getAge(): number {
        return moment().diff(this.birthDate, "years");
    }

    public getSpecialties(): TEACHER_SPECIALTY[] {
        return this.specialties;
    }
}