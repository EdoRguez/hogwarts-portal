import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterTableComponent } from './character-table/character-table.component';
import { CharacterFilterListComponent } from './character-filter-list/character-filter-list.component';
import { MaterialModule } from 'src/app/components/shared/modules/material.module';
import { GlobalPipesModule } from '../shared/modules/global-pipes.module';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterTableComponent,
    CharacterFilterListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule,
    GlobalPipesModule,
    LoaderModule
  ]
})
export class CharacterModule { }
