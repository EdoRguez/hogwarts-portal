import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterTableComponent } from './character-table/character-table.component';
import { CharacterFilterListComponent } from './character-filter-list/character-filter-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ReplaceNullWithLinePipe } from './pipes/replace-null-with-line.pipe';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterTableComponent,
    CharacterFilterListComponent,
    ReplaceNullWithLinePipe
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule
  ]
})
export class CharacterModule { }
