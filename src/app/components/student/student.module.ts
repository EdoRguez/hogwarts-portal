import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { GlobalPipesModule } from '../shared/modules/global-pipes.module';
import { StudentTableComponent } from './student-table/student-table.component';
import { LoaderModule } from '../shared/components/loader/loader.module';
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    GlobalPipesModule,
    LoaderModule
  ]
})
export class StudentModule { }
