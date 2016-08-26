/// <reference path="../../../typings/index.d.ts" />
/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { AngularFire } from 'angularfire2';

describe('Service: Data', () => {

  beforeEach(() => {
    addProviders([DataService, AngularFire]);
  });

  it('should ...',
    inject([DataService],
      (service: DataService) => {
        expect(service).toBeTruthy();
      }));
});
