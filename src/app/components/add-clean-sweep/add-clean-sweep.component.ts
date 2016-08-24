import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormArray, Validators } from '@angular/forms';
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
        // value.firstName = value.firstName.toUpperCase();
        return value;
      })
      .filter((value) => this.addCleanSweepForm.valid)
      .subscribe(validValue => {
        console.log(validValue);
      });
  }
  ngOnInit() {
  }


  add() {
    let cs = new CleanSweep();
    cs.date = this.date;
    cs.startTime = this.startTime;
    cs.endTime = this.endTime;
    // cs.streets = this.streets;
    this.ds.createCleanSweep(cs);
    this.addCleanSweepEvents.emit('added');
  }
  testSubmit(data: any) {
    console.log(data);

  }
  cancel() {
    this.addCleanSweepEvents.emit('cancelled');
  }

  buildStreet() {
    return this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      startHouseNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      endHouseNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]]
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

}
