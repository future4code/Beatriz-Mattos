import { Mission } from './Mission';
import { Students } from './Students';
import { Teacher } from './Teacher';

export class NightMission extends Mission {
    private name: string = "";
    
    constructor(
        private id: number,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Students[] = [],
        private currentModule: number | undefined = undefined
    ) {
        super(id, startDate, endDate, teachers, students, currentModule)
    }

    public setName(name: string) {
        if(name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
    }
}