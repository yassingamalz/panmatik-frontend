import { TestBed } from '@angular/core/testing';

import { HealthApi } from './health-api';

describe('HealthApi', () => {
  let service: HealthApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
