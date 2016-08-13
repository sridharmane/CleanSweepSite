/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ManageCleanSweepComponent } from './manage-clean-sweep.component';
import { DataService } from '../data.service';

describe('Component: ManageCleanSweep', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let component = new ManageCleanSweepComponent(ds);
    expect(component).toBeTruthy();
  });
});
