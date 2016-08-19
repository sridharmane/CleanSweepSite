/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { FirebaseDBService } from './firebase-db.service';

describe('Service: FirebaseDB', () => {
  beforeEach(() => {
    addProviders([FirebaseDBService]);
  });

  it('should ...',
    inject([FirebaseDBService],
      (service: FirebaseDBService) => {
        expect(service).toBeTruthy();
      }));
});
