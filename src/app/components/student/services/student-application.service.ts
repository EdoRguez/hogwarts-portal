import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentApplicationService {

  constructor() { }

  getAll(): Student[] | [] {
    let dbUsers = localStorage.getItem('dbUsers');
    if (dbUsers) {
      return JSON.parse(dbUsers);
    }

    return [];
  }

  create(student: Student): void {
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

  update(oldStudent: Student, student: Student): void {
    let dbUsers = localStorage.getItem('dbUsers');

    if(dbUsers) {
      let currentUsers: Student[] = JSON.parse(dbUsers);
      let indexToUpdate = currentUsers.findIndex(x => x === oldStudent);

      currentUsers[indexToUpdate] = student;
  
      let newUsers = JSON.stringify(currentUsers);
      localStorage.setItem('dbUsers', newUsers);
    }
  }

  delete(student: Student) {
    let dbUsers = localStorage.getItem('dbUsers');

    if(dbUsers) {
      let currentUsers: Student[] = JSON.parse(dbUsers);
      let indexToDelete = currentUsers.findIndex(x => x === student);

      currentUsers.splice(indexToDelete, 1);
  
      let newUsers = JSON.stringify(currentUsers);
      localStorage.setItem('dbUsers', newUsers);
    }
  }


}
