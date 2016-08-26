import { Pipe, PipeTransform } from '@angular/core';
import { Street } from '../types/street';

@Pipe({
  name: 'streetNames'
})
export class StreetNamesPipe implements PipeTransform {

  transform(streets: Street[], args?: any): any {

    if (typeof streets === 'undefined' || streets === null) {
      return null;
    }
    let length = streets.length;
    let namesString = '';
    streets.forEach((street, index) => {
      if (index === length - 2) {
        namesString += street.name + ' & ';
      } else if (index === length - 1) {
        namesString += street.name;
      }else{
        namesString += street.name + ', ';
      }

    });
    return namesString;
  }

}
