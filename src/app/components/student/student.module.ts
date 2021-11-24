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


@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent,
    StudentApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule,
    MaterialModule,
    GlobalPipesModule,
    LoaderModule
  ]
})
export class StudentModule { }
