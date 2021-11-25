import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../interfaces/student.interface';
import { StudentApplicationService } from '../services/student-application.service';
import { StudentApplicationDialogComponent } from './student-application-dialog/student-application-dialog.component';

@Component({
  selector: 'app-student-application',
  templateUrl: './student-application.component.html',
  styleUrls: ['./student-application.component.scss'],
})
export class StudentApplicationComponent implements OnInit {
  students: Student[] = [];

  constructor(public dialog: MatDialog,
              private studentApplicationService: StudentApplicationService) {}

  ngOnInit(): void {
    this.students = this.studentApplicationService.getAll();
  }

  onApplyStudent(): void {
    this.openDialog();
  }

  onDeleteStudent(student: Student): void {
    this.studentApplicationService.delete(student.id);
    this.students = this.studentApplicationService.getAll();
  }

  onUpdateStudent(student: Student): void {
    this.openDialog(student);
  }

  private openDialog(student?: Student): void {
    const dialogRef = this.dialog.open(StudentApplicationDialogComponent, {
      width: '450px',
      data: student
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if(dialogRef.componentInstance.isUpdate) {
          const oldStudent = dialogRef.componentInstance.data;
          this.studentApplicationService.update(oldStudent.id, result);
        } else {
          this.studentApplicationService.create(result);
        }

        this.students = this.studentApplicationService.getAll();
      }
    });
  }
}
