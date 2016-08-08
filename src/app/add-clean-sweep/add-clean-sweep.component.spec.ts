/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddCleanSweepComponent } from './add-clean-sweep.component';
import { DataService } from '../data.service';

describe('Component: CreateCleanSweep', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let component = new AddCleanSweepComponent(ds);
    expect(component).toBeTruthy();
  });
});
