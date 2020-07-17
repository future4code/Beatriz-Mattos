import { FileManager } from './FileManager';
import { student1, student2, student3, student4 } from './Student';
import { teacher1, teacher2, teacher3, teacher4 } from './Teacher';
import { fullTimeMission } from './FullTimeMission';
import { nightMission, NightMission } from './NightMission';

const fm = new FileManager("students.json");
fm.registerInJSON(student1);
fm.registerInJSON(student2);
fm.registerInJSON(student3);
fm.registerInJSON(student4);

fm.setFilePath("teachers.json");
fm.registerInJSON(teacher1);
fm.registerInJSON(teacher2);
fm.registerInJSON(teacher3);
fm.registerInJSON(teacher4);

fm.setFilePath("missions.json");
fullTimeMission.setName("Julian")
fullTimeMission.addStudent(student1);
fullTimeMission.addStudent(student2);
fullTimeMission.addTeacher(teacher1);
fullTimeMission.addTeacher(teacher2);
fm.registerInJSON(fullTimeMission);

nightMission.setName("Lovelace");
nightMission.addStudent(student3);
nightMission.addStudent(student4);
nightMission.addTeacher(teacher3);
nightMission.addTeacher(teacher4);
fm.registerInJSON(nightMission);