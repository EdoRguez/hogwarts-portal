import { Component, OnInit } from '@angular/core';
import { Student } from './interfaces/student.interface';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  isLoading: boolean = true;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(
      (res: Student[]) => {
        this.students = res;
        this.isLoading = false;
      },
      err => {
        console.log('error');
        console.log(err);
        this.isLoading = false;
      }
    );
  }

}
