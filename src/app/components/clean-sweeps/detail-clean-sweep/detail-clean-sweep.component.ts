import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';

import {CleanSweep}  from '../../../types/clean-sweep';
import { CleanSweepEventData } from '../../../types/clean-sweep-event-data';
// import {Street}  from '../../types/street';


@Component({
  selector: 'app-detail-clean-sweep',
  templateUrl: './detail-clean-sweep.component.html',
  styleUrls: ['detail-clean-sweep.component.scss'],
  providers: [DateTimeService],
  // directives: [FormGroup, FormControlName]
})
export class DetailCleanSweepComponent implements OnInit {

  @Output() cleanSweepEvents = new EventEmitter<CleanSweepEventData>();

  addCleanSweepForm: FormGroup;
  date: string;
  startTime: string = '09:00 am';
  endTime: string = '04:00 pm';
  streets: FormArray;

  constructor(private ds: DataService, private dts: DateTimeService, private _fb: FormBuilder) {

    this.addCleanSweepForm = this._fb.group({
      date: this.dts.date,
      startTime: this.startTime,
      endTime: this.endTime,
      streets: this.buildStreetsArray()
    });
    this.addCleanSweepForm.valueChanges
      .map((value) => {
        // value.streets = value.firstName.toUpperCase();
        return value;
      })
      // .filter((value) => this.addCleanSweepForm.valid)
      .subscribe(validValue => {
        console.log(validValue);
      });
    this.getCleanSweep();
  }
  ngOnInit() {
  }
  getLastCleanSweepNumber() {
    // this.ds.getCleanSweep({});
  }

  submit(formData) {
    console.log('Submiting Form with data:', formData);
    let cs = new CleanSweep(formData);
    console.log(cs);
    this.ds.createCleanSweep(cs);
    this.cleanSweepEvents.emit({ component: 'addCleanSweepComponent', visible: false });
  }

  cancel() {
    this.cleanSweepEvents.emit({ component: 'addCleanSweepComponent', visible: false });
  }

  buildStreet() {
    return this._fb.group({
      name: ['Elm', [Validators.required, Validators.minLength(3)]],
      startHouseNumber: ['1', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      endHouseNumber: ['100', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]]
    });
  }

  buildStreetsArray(): FormArray {
    this.streets = this._fb.array([
      this.buildStreet()
    ]);
    return this.streets;
  }
  addStreet() {
    this.streets.push(
      this.buildStreet()
    );
  }
  removeStreet(index: number) {
    this.streets.removeAt(index);
  }

  onSubmit() {
    // this.form.
  }
  getCleanSweep() {
    this.ds.getCleanSweep();
  }

}
