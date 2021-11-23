import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullWithLine'
})
export class ReplaceNullWithLinePipe implements PipeTransform {

  transform(value: any): any {
    if(!value) {
      return '-';
    } else {
      return value;
    }
  }

}
