import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';

import { CleanSweep } from '../../../types/clean-sweep';
import { CleanSweepEventData } from '../../../types/clean-sweep-event-data';
// import {Street}  from '../../types/street';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { MESSAGES } from '../../../shared';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-clean-sweep',
  templateUrl: './add-clean-sweep.component.html',
  styleUrls: ['./add-clean-sweep.component.scss'],
  providers: [DateTimeService],
  // directives: [FormGroup, FormControlName]
})
export class AddCleanSweepComponent implements OnInit {

  @Output() cleanSweepEvents = new EventEmitter<CleanSweepEventData>();

  addCleanSweepForm: FormGroup;
  date: string;
  startTime: string = '09:00 am';
  endTime: string = '04:00 pm';
  streets: FormArray;

  constructor(
    private ds: DataService,
    private dts: DateTimeService,
    private fb: FormBuilder,
    private snackBar: MdSnackBar,
    private vcr: ViewContainerRef,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {

    this.addCleanSweepForm = this.fb.group({
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
        // console.log(validValue);
      });
    this.getCleanSweep();
  }
  ngOnInit() {
  }

  showSnackBar(message: string) {
    let config = new MdSnackBarConfig();
    this.snackBar.open(message, 'OK', config);
  }

  submit(formData) {
    console.log('Submiting Form with data:', formData);
    let cs = new CleanSweep(formData);

    this.ds.createCleanSweep(cs).then(success => {
      console.log('Add CleanSweep Success ', success);
      this.showSnackBar(MESSAGES.CLEANSWEEP_CREATED);
      this.goto('detail', success);
    }, error => {
      console.log('Add CleanSweep Error ', error);
      this.showSnackBar(MESSAGES.CLEANSWEEP_CREATE_ERROR);
    });

  }

  cancel() {
  }

  buildStreet() {
    return this.fb.group({
      name: ['Elm', [Validators.required, Validators.minLength(3)]],
      startHouseNumber: ['1', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
      endHouseNumber: ['100', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]]
    });
  }

  buildStreetsArray(): FormArray {
    this.streets = this.fb.array([
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

  getCleanSweep() {
    this.ds.getCleanSweep();
  }
  goto(childRoute: string, success: any) {
    this.router.navigate([success.key, childRoute], { relativeTo: this.currentRoute.parent });
  }
}
