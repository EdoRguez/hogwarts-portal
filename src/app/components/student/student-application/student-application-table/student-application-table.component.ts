import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-student-application-table',
  templateUrl: './student-application-table.component.html',
  styleUrls: ['./student-application-table.component.scss']
})
export class StudentApplicationTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() listStudents: Student[] = [];
  
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image', 'edit', 'delete'];

  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { 
    this.dataSource = new MatTableDataSource(this.listStudents);
  }
  
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Student, filter: string): boolean => {
      return data.name.toLowerCase().includes(filter) || 
             data.patronus.toLowerCase().includes(filter) || 
             data.age!.toString().includes(filter);
     };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTableData(changes['listStudents'].currentValue);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private updateTableData(students: Student[]): void {
    this.dataSource = new MatTableDataSource(students);
    this.refreshTable();
  }

  private refreshTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDeleteStudentApplication(student: Student) {
    console.log(student);
  }

  onEditStudentApplication(student: Student) {
    console.log(student);
  }

}
