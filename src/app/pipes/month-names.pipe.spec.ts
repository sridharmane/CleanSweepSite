/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MonthNamesPipe } from './month-names.pipe';

describe('Pipe: MonthNames', () => {
  it('create an instance', () => {
    let pipe = new MonthNamesPipe();
    expect(pipe).toBeTruthy();
  });
});
