import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';

const ORDER_ASCENDING = 'ascending';
const ORDER_DESCENDING = 'descending';
@Pipe({
  name: 'monthNames'
})
export class MonthNamesPipe implements PipeTransform {
  monthNames: string[];
  monthNamesReverse: string[];

  constructor(dts: DateTimeService) {
    this.monthNames = dts.monthNames;
    this.monthNamesReverse = dts.monthNamesReverse;
  }
  transform(value: any, order: string): any {
    // console.log(value,  this.monthNames);
    // if (order === ORDER_ASCENDING) {
    //   return this.monthNames[value];
    // } else if (order === ORDER_DESCENDING) {
    //   return this.monthNamesReverse[value];
    // } else {
    //   return this.monthNames[value];
    // }
    return this.monthNames[value];
  }
  

}
