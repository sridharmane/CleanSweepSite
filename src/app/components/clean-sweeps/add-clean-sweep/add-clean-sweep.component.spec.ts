/// <reference path="../../../../../typings/index.d.ts" />

/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddCleanSweepComponent } from './add-clean-sweep.component';
import { DataService } from '../../../services/data.service';
import { DateTimeService } from '../../../services/date-time.service';


describe('Component: AddCleanSweep', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let dts: DateTimeService;
    let fb: FormBuilder;
    let component = new AddCleanSweepComponent(ds, dts, fb);
    expect(component).toBeTruthy();
  });
});
