import { NgModule } from '@angular/core';
import { ReplaceNullWithLinePipe } from '../pipes/replace-null-with-line.pipe';

@NgModule({
  declarations: [
    ReplaceNullWithLinePipe
  ],
  exports: [
    ReplaceNullWithLinePipe
  ]
})
export class GlobalPipesModule { }
