import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/shared/modules/material.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/shared/components/navbar/navbar.module';
import { CharacterModule } from './components/character/character.module';
import { HttpClientModule } from '@angular/common/http';
import { TeacherModule } from './components/teacher/teacher.module';
import { StudentModule } from './components/student/student.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HomeModule,
    NavbarModule,
    CharacterModule,
    HttpClientModule,
    TeacherModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
