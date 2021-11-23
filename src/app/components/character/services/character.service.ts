import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UtilsService } from '../../shared/services/utils.service';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private baseUrl: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getByHouseName(houseName: string): Observable<Character[]> {
    return this.http
      .get<Character[]>(`${this.baseUrl}/house/${houseName}`)
      .pipe(
        map((res: Character[]) => {
          this.utilsService.calculatePeopleAge(res);
          return res;
        })
      );
  }
}
