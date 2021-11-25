import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Teacher } from '../interfaces/teacher.interface';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent implements OnInit, AfterViewInit {

  @Input() listTeachers: Teacher[] = [];
  
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  dataSource!: MatTableDataSource<Teacher>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.listTeachers);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
