/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PartnersComponent } from './partners.component';
import { DataService } from '../data.service';


describe('Component: ListPartners', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let component = new PartnersComponent(ds);
    expect(component).toBeTruthy();
  });
});
