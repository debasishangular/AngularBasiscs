import {Pipe, PipeTransform} from '@angular/core';
import { NewCompany } from '../models/newcompany';

@Pipe({
    name: 'purepipe'
})
export class PurePipe implements PipeTransform {
  transform(obj: NewCompany): string {
    const output = obj.cname + ' : ' + obj.location;
    return output;
  }
}
