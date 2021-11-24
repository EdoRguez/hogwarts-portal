import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UtilsService } from '../../shared/services/utils.service';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl: string = 'http://hp-api.herokuapp.com/api/characters/students';

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`).pipe(
      map((res: Student[]) => {
        this.utilsService.calculatePeopleAge(res);
        return res;
      })
    );
  }
}
