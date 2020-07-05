import { Mission } from './Mission';
import * as moment from 'moment';

class FullTimeMission extends Mission {}

export const fullTimeMission = new FullTimeMission("01", moment("18/01/2010", "DD/MM/YYYY"), moment("18/06/2010", "DD/MM/YYYY"), [], [], 5);