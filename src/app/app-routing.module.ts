import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'characters', loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule) },
  { path: 'teachers', loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'students', loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
