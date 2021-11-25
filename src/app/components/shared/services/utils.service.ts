import { Injectable } from '@angular/core';
import { Character } from '../../character/interfaces/character.interface';
import * as moment from 'moment';
import { Teacher } from '../../teacher/interfaces/teacher.interface';
import { Student } from '../../student/interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  calculatePeopleAge(people: Character[] | Teacher[] | Student[]): void {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dateOfBirth) {
        const momentDate = moment(people[i].dateOfBirth, 'DD-MM-YYYY');
        people[i].age = moment().diff(momentDate, 'years');
      } else {
        people[i].age = undefined;
      }
    }
  }

  generateGuid(): string {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
  } 
}
