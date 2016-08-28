/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ListCleanSweepsComponent } from './list-clean-sweeps.component';
import { DataService } from '../../../services/data.service';

describe('Component: ListCleanSweepsComponent', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let component = new ListCleanSweepsComponent(ds);
    expect(component).toBeTruthy();
  });
});
