import { Component, OnInit } from '@angular/core';
import { Teacher } from './interfaces/teacher.interface';
import { TeacherService } from './services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = [];
  isLoading: boolean = true;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getAll().subscribe(
      (res: Teacher[]) => {
        this.teachers = res;
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
