import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../interfaces/student.interface';
import { StudentApplicationDialogComponent } from './student-application-dialog/student-application-dialog.component';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss'],
})
export class StudentApplicationComponent implements OnInit {
  students: Student[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let dbUsers = localStorage.getItem('dbUsers');
    if (dbUsers) {
      this.students = JSON.parse(dbUsers);
    }
  }

  onApplyStudent(): void {
    this.openDialog();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(StudentApplicationDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let dbUsers = localStorage.getItem('dbUsers');

        if (dbUsers) {
          let currentUsers = JSON.parse(dbUsers);
          currentUsers.push(result);

          this.students = currentUsers;

          let newUsers = JSON.stringify(currentUsers);
          localStorage.setItem('dbUsers', newUsers);
        } else {
          let currentUsers = [result];

          this.students = currentUsers;

          let newUsers = JSON.stringify(currentUsers);
          localStorage.setItem('dbUsers', newUsers);
        }
      }
    });
  }
}
