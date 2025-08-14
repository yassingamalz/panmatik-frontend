import { TestBed } from '@angular/core/testing';

import { HealthMonitoring } from './health-monitoring';

describe('HealthMonitoring', () => {
  let service: HealthMonitoring;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthMonitoring);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
