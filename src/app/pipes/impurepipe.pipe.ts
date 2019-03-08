import {Pipe, PipeTransform} from '@angular/core';
import { NewCompany } from '../models/newcompany';

@Pipe({
    name: 'impurepipe',
    pure: false
})
export class ImpurePipe implements PipeTransform {
  transform(obj: NewCompany): string {
    const output = obj.cname + ' : ' + obj.location;
    return output;
  }
}
