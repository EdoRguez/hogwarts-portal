import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http: HttpClient) { }

  getByHouseName(houseName: string): Observable<Character[]> {
    return this.http
          .get<Character[]>(`${this.baseUrl}/house/${houseName}`)
          .pipe(
            map(
              (res: Character[]) => {
                this.calculateAge(res);
                return res;
              }
            )
          );
  }

  private calculateAge(characters: Character[]): void {
    for(let i = 0; i < characters.length; i++) {
      if(characters[i].dateOfBirth) {
        const momentDate = moment(characters[i].dateOfBirth, "DD-MM-YYYY");
        characters[i].age = moment().diff(momentDate, 'years');
      } else {
        characters[i].age = undefined;
      }
    }
  }
}
