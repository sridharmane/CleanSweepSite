import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';

@Pipe({
  name: 'monthNames'
})
export class MonthNamesPipe implements PipeTransform {
  monthNames: string[];

  constructor(dts: DateTimeService) {
    this.monthNames = dts.monthNames;
  }
  transform(value: any, args?: any): any {
    // console.log(value,  this.monthNames);
    return this.monthNames[value];
  }

}
