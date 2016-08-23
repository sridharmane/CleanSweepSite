import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormArray,Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { DateTimeService } from '../../services/date-time.service';

import {CleanSweep}  from '../../types/clean-sweep';
import {Street}  from '../../types/street';


@Component({
  selector: 'app-add-clean-sweep',
  templateUrl: './add-clean-sweep.component.html',
  styleUrls: ['add-clean-sweep.component.scss'],
  providers: [DateTimeService],
  // directives: [FormGroup, FormControlName]
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

  addCleanSweepForm: FormGroup;
  date: string;
  startTime: string;
  endTime: string;
  streets: FormArray;

  constructor(private ds: DataService, private dts: DateTimeService, private _fb: FormBuilder) {

    this.addCleanSweepForm = this._fb.group({
      date: this.dts.date,
      startTime: this.dts.time,
      endTime: this.dts.time,
      streets: this.buildStreetsArray()
    });
  }
  ngOnInit() {
  }


  add() {
    let cs = new CleanSweep();
    cs.date = this.date;
    cs.startTime = this.startTime;
    cs.endTime = this.startTime;
    // cs.streets = this.streets;
    this.ds.createCleanSweep(cs);
    this.addCleanSweepEvents.emit('added');
  }
  cancel() {
    this.addCleanSweepEvents.emit('cancelled');
  }

  buildStreet() {
    return this._fb.group({
      name: '',
      startHouseNumber: '',
      endHouseNumber: ''
    });
  }

  buildStreetsArray(): FormArray {
    this.streets = this._fb.array([
      this.buildStreet()
    ]);
    return this.streets;
  }
  addStreet(){
    this.streets.push(
      this.buildStreet()
      );
  }

}
