import { Injectable } from '@angular/core';
import { Character } from '../../character/interfaces/character.interface';
import * as moment from 'moment';
import { Teacher } from '../../teacher/interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  calculatePeopleAge(people: Character[] | Teacher[]): void {
    for (let i = 0; i < people.length; i++) {
      if (people[i].dateOfBirth) {
        const momentDate = moment(people[i].dateOfBirth, 'DD-MM-YYYY');
        people[i].age = moment().diff(momentDate, 'years');
      } else {
        people[i].age = undefined;
      }
    }
  }
}
