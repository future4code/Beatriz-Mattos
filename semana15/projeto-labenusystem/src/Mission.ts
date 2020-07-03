import * as moment from 'moment';
import { Teacher } from './Teacher';
import { Students } from './Students';

export abstract class Mission {
    private name: string = "";

    constructor(
        private id: number,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Students[] = [],
        private currentModule: number | undefined = undefined
    ) {}

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public getStartDate(): moment.Moment {
        return this.startDate;
    }

    public getEndDate(): moment.Moment {
        return this.endDate;
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    public addStudents(student: Students) {
        this.students.push(student);
    }

    public setName(name: string) {
        this.name = name;
    }
}