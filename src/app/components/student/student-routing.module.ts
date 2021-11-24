import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentApplicationComponent } from './student-application/student-application.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'applications', component: StudentApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
