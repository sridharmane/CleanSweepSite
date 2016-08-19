/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PartnerCategoriesComponent } from './partner-categories.component';
import { DataService } from '../data.service';

describe('Component: PartnerCategories', () => {
  it('should create an instance', () => {
    let ds: DataService;
    let component = new PartnerCategoriesComponent(ds);
    expect(component).toBeTruthy();
  });
});
