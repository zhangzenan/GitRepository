/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemeryDataService } from './in-memery-data.service';

describe('Service: InMemeryData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemeryDataService]
    });
  });

  it('should ...', inject([InMemeryDataService], (service: InMemeryDataService) => {
    expect(service).toBeTruthy();
  }));
});