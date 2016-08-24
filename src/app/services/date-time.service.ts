import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateTimeService {
  // moment: any;

  private _now: string;
  private _selectedDateTime: string;
  private _defaultDateFormat = 'DD-MM-YYYY';
  private _defaultTimeFormat = 'h:mm a';
  constructor() {
    this._now = moment().format();
    console.log(this._now);
  }

  public get now(): string {
    return this._now;
  }
  public get date(): string {
    // return moment().format('DD-MM-YYYY');
    return moment().format(this._defaultDateFormat);
  }
  public get time(): string {
    return moment().format('h:mm a');
  }

  public get selectedDateTime(): string {
    if (typeof this._selectedDateTime === 'undefined') {
      this._selectedDateTime = this.now;
    }
    return this._selectedDateTime;
  }

  public set selectedDate(v: string) {
    let sd = moment(v);
    let sdt = moment(this._selectedDateTime);
    console.log('Old Date', this._selectedDateTime);

    sdt.month(sd.month());
    sdt.year(sd.year());
    sdt.date(sd.date());
    this._selectedDateTime = sdt.format();
    console.log('New Date', this._selectedDateTime);

  }
  public set selectedTime(v: string) {
    let sd = moment(v);
    let sdt = moment(this._selectedDateTime);
    console.log('Old Time', this._selectedDateTime);

    sdt.hour(sd.hour());
    sdt.minute(sd.minute());
    sdt.second(sd.second());
    this._selectedDateTime = sdt.format();
    console.log('New Time', this._selectedDateTime);
  }

  getWeeksInMonth(monthIndex: number, year: number): number {
    // let past = moment('2016-02-11T20:50:35.268Z');  
    let daysInMonth = moment().set({ 'year': year, 'month': monthIndex }).daysInMonth();
    console.log(daysInMonth);
    return daysInMonth;
  }


  formatTimeForDisplay(time: string) {
    return moment(time).format(this._defaultTimeFormat);
  }
  formatDateForDisplay(date: string) {
    return moment(date).format(this._defaultDateFormat);
  }

}
