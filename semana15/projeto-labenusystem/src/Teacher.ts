import { User } from './User';
//import * as moment from 'moment';

export enum TEACHER_SPECIALTY {
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
        public id: string,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[]
    ) {}
}

export const teacher1 = new Teacher("01", "João", "joao@labemail.com", [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.TYPESCRIPT]);
export const teacher2 = new Teacher("02", "Darvas", "darvas@labemail.com", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.BACKEND]);
export const teacher3 = new Teacher("03", "Amanda", "amanda@labemail.com", [TEACHER_SPECIALTY.OOP, TEACHER_SPECIALTY.TYPESCRIPT]);
export const teacher4 = new Teacher("04", "Soter", "soter@labemail.com", [TEACHER_SPECIALTY.TESTES, TEACHER_SPECIALTY.REDUX]);
