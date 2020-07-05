import { Mission } from './Mission';
import * as moment from 'moment';

export class NightMission extends Mission {
    // private name: string = "";
    
    // constructor(
    //     private id: string,
    //     private startDate: moment.Moment,
    //     private endDate: moment.Moment,
    //     private teachers: Teacher[] = [],
    //     private students: Student[] = [],
    //     private currentModule: number | undefined = undefined
    // ) {
    //     super(id, startDate, endDate, teachers, students, currentModule)
    // }

    public setName(name: string) {
        if(name.indexOf("-na-night") !== -1) {
            super.setName(name);
        } else {
            super.setName(name + "-na-night")
        }
    }
}

export const nightMission = new NightMission("02", moment("18/02/2010", "DD/MM/YYYY"), moment("18/08/2010", "DD/MM/YYYY"), [], [], 4);