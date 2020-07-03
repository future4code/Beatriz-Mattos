import { User } from './User';
import * as moment from 'moment';

export class Students implements User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ) {}

    public getId(): number {
        return this.id;
    }

    public getAge(): number {
        return moment().diff(this.birthDate, "years");
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getHobbies(): string[] {
        return this.hobbies;
    }
}