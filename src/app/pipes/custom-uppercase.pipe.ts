import { Pipe, PipeTransform } from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe extends UpperCasePipe implements PipeTransform  {

  transform(value: string): string {
    let result = super.transform(value);
    result = result.split(' ').join('-');
          return result;
    }

}
