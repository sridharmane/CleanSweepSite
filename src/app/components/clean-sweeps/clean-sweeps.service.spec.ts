/// <reference path="../../../../typings/index.d.ts" />
/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CleanSweepsService } from './clean-sweeps.service';
import { AngularFire } from 'angularfire2';

describe('Service: Data', () => {

  beforeEach(() => {
    addProviders([CleanSweepsService, AngularFire]);
  });

  it('should ...',
    inject([CleanSweepsService],
      (service: CleanSweepsService) => {
        expect(service).toBeTruthy();
      }));
});
