import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';

const ORDER_ASCENDING = 'ascending';
const ORDER_DESCENDING = 'descending';
const CATEGORIZE_BY_MONTH = 'month';

@Pipe({
  name: 'categorizeByDate'
})
export class CategorizeByDatePipe implements PipeTransform {
  monthNames: string[];
  categorisedDates: any[];
  constructor(dts: DateTimeService) {
    this.monthNames = dts.monthNames;
    this.categorisedDates = [];
  }

  transform(value: any, categorizeBy?: string, order?: string): any {
    if (value === null) {
      this.categorisedDates = [];
      return null;
    }
    console.log('categorizeByDate pipe args', categorizeBy, order);
    if (order) {
      if (order !== ORDER_ASCENDING || order !== ORDER_DESCENDING) {
        order = ORDER_DESCENDING;
      }
    }

    if (categorizeBy === CATEGORIZE_BY_MONTH) {
      this.categorisedDates = [];
      if (order === ORDER_ASCENDING) {
        value.forEach(cs => {
          let monthIndex = cs.date.split('-')[0] - 1;
          if (this.categorisedDates[monthIndex]) {
            this.categorisedDates[monthIndex].push(cs);
          } else {
            this.categorisedDates[monthIndex] = [];
            this.categorisedDates[monthIndex].push(cs);
          }
        });
        return this.categorisedDates;
      } else if (order === ORDER_DESCENDING) {
        value.forEach(cs => {
          let monthIndex = cs.date.split('-')[0] - 1;
          monthIndex = 11 - monthIndex;
          if (this.categorisedDates[monthIndex]) {
            this.categorisedDates[monthIndex].push(cs);
          } else {
            this.categorisedDates[monthIndex] = [];
            this.categorisedDates[monthIndex].push(cs);
          }
        });
        return this.categorisedDates;
        // return this.categorisedDates.slice().reverse();
      }
    }
  }

}
