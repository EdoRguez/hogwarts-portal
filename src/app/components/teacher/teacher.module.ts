import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { MaterialModule } from 'src/app/components/shared/modules/material.module';
import { TeacherTableComponent } from './teacher-table/teacher-table.component';
import { GlobalPipesModule } from '../shared/modules/global-pipes.module';
import { LoaderModule } from '../shared/components/loader/loader.module';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherTableComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    GlobalPipesModule,
    LoaderModule
  ]
})
export class TeacherModule { }
