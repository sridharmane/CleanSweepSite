/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GeocodingService } from './geocoding.service';

describe('Service: Geocoding', () => {
  beforeEach(() => {
    addProviders([GeocodingService]);
  });

  it('should ...',
    inject([GeocodingService],
      (service: GeocodingService) => {
        expect(service).toBeTruthy();
      }));
});
