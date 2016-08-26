/// <reference path="../../../typings/index.d.ts" />
/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DateTimeService } from './date-time.service';

describe('Service: DateTime', () => {
  beforeEach(() => {
    addProviders([DateTimeService]);
  });

  it('should ...',
    inject([DateTimeService],
      (service: DateTimeService) => {
        expect(service).toBeTruthy();
      }));
});
