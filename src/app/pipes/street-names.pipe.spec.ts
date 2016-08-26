/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { StreetNamesPipe } from './street-names.pipe';

describe('Pipe: StreetNames', () => {
  it('create an instance', () => {
    let pipe = new StreetNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
