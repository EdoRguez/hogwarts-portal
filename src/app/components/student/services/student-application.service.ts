import { Injectable } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentApplicationService {

  constructor(private utilsService: UtilsService) { }

  getAll(): Student[] | [] {
    let dbUsers = localStorage.getItem('dbUsers');
    if (dbUsers) {
      return JSON.parse(dbUsers);
    }

    return [];
  }

  create(student: Student): void {
    student.id = this.utilsService.generateGuid();
    
    let dbUsers = localStorage.getItem('dbUsers');

    if (dbUsers) {
      let currentUsers: Student[] = JSON.parse(dbUsers);
      currentUsers.push(student);

      let newUsers = JSON.stringify(currentUsers);
      localStorage.setItem('dbUsers', newUsers);
    } else {
      let currentUsers = [student];

      let newUsers = JSON.stringify(currentUsers);
      localStorage.setItem('dbUsers', newUsers);
    }
  }

  update(idStudent: string, student: Student): void {
    let dbUsers = localStorage.getItem('dbUsers');

    if(dbUsers) {
      let currentUsers: Student[] = JSON.parse(dbUsers);

      let indexToUpdate = currentUsers.findIndex(x => x.id === idStudent);

      if(indexToUpdate !== -1) {
        currentUsers[indexToUpdate] = student;
    
        let newUsers = JSON.stringify(currentUsers);
        localStorage.setItem('dbUsers', newUsers);
      }

    }
  }

  delete(idStudent: string) {
    let dbUsers = localStorage.getItem('dbUsers');

    if(dbUsers) {
      let currentUsers: Student[] = JSON.parse(dbUsers);
      let indexToDelete = currentUsers.findIndex(x => x.id === idStudent);

      if(indexToDelete !== -1) {
        currentUsers.splice(indexToDelete, 1);
    
        let newUsers = JSON.stringify(currentUsers);
        localStorage.setItem('dbUsers', newUsers);
      }

    }
  }


}
