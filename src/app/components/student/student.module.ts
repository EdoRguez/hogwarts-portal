import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { GlobalPipesModule } from '../shared/modules/global-pipes.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { LoaderModule } from '../shared/components/loader/loader.module';
import { MaterialModule } from '../shared/modules/material.module';
import { StudentApplicationComponent } from './student-application/student-application.component';
import { RouterModule } from '@angular/router';
import { StudentApplicationDialogComponent } from './student-application/student-application-dialog/student-application-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentApplicationTableComponent } from './student-application/student-application-table/student-application-table.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent,
    StudentApplicationComponent,
    StudentApplicationDialogComponent,
    StudentApplicationTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule,
    MaterialModule,
    GlobalPipesModule,
    LoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
