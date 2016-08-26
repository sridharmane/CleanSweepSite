/// <reference path="../../typings/index.d.ts" />
/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import { DataService } from './data.service';
// import { GeocodingService } from './geocoding.service';

describe('App: CleanSweepSite', () => {
  beforeEach(() => {
    // addProviders([AppComponent, DataService, GeocodingService]);
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'Home\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('Home');
    }));
});
