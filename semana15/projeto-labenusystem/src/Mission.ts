import * as moment from 'moment';
import { Teacher } from './Teacher';
import { Student } from './Student';

export abstract class Mission {
    private name: string = "";

    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule?: number
    ) {}

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }

    public addStudent(student: Student) {
        this.students.push(student);
    }

    public setName(name: string) {
        this.name = name;
    }
}