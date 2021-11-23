import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UtilsService } from '../../shared/services/utils.service';
import { Teacher } from '../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private baseUrl: string = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}`).pipe(
      map((res: Teacher[]) => {
        this.utilsService.calculatePeopleAge(res);
        return res;
      })
    );
  }
}
