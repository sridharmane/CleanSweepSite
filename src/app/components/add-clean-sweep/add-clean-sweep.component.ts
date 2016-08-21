import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DateTimeService } from '../../services/date-time.service';

import {CleanSweep}  from '../../types/clean-sweep';
import {Street}  from '../../types/street';

@Component({
  selector: 'app-add-clean-sweep',
  templateUrl: './add-clean-sweep.component.html',
  styleUrls: ['add-clean-sweep.component.scss'],
  providers: [DateTimeService]
})
export class AddCleanSweepComponent implements OnInit {

  @Output() addCleanSweepEvents = new EventEmitter<any>();

  // newCS: CleanSweep = {
  //   number: null,
  //   date: null,
  //   startTime: null,
  //   endTime: null,
  //   accessCode: null,
  //   streets: null,
  //   streetAddresses: null,
  //   partners: null
  // };

  cityName: string = 'Buffalo';
  countryCode: string = 'US';
  streets: Street[] = [{
      name: null,
      startHouseNumber: null,
      endHouseNumber: null
    }];

  date: string;
  startTime: string;
  endTime: string;

  constructor(private ds: DataService, private dts: DateTimeService) {

    this.initForm();
  }
  ngOnInit() {
  }

  initForm() {
    this.date = this.dts.date;
    this.startTime = this.dts.time;
    this.endTime = this.dts.time;
    // this.addStreet();
  }

  addStreet() {
    this.streets.push({
      name: null,
      startHouseNumber: null,
      endHouseNumber: null
    });
  }

  add() {
    let cs = new CleanSweep();
    cs.date = this.date;
    cs.startTime = this.startTime;
    cs.endTime = this.startTime;
    cs.streets = this.streets;
    this.ds.createCleanSweep(cs);
    this.addCleanSweepEvents.emit('added');
  }
  cancel() {
    this.streets = [];
    this.initForm();
    this.addCleanSweepEvents.emit('cancelled');
  }

}
