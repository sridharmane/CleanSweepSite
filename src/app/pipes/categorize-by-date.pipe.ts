import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';

@Pipe({
  name: 'categorizeByDate'
})
export class CategorizeByDatePipe implements PipeTransform {
  monthNames: string[];
  categories: any[];
  constructor(dts: DateTimeService) {
    this.monthNames = dts.monthNames;
    this.categories = [];
  }

  transform(value: any, args?: any): any {
    if(value === null){
      this.categories = [];
      return null;
    }
    if (args === 'month') {
      this.categories = [];
      value.forEach(cs => {
        let monthIndex = cs.date.split('-')[0] - 1;
        if (this.categories[monthIndex]) {
          this.categories[monthIndex].push(cs);
        } else {
          this.categories[monthIndex] = [];
          this.categories[monthIndex].push(cs);
        }
      });
      console.log(this.categories);
      
    }

    return this.categories;
  }

}
