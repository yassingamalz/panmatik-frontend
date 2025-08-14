import { TestBed } from '@angular/core/testing';

import { MachineApi } from './machine-api';

describe('MachineApi', () => {
  let service: MachineApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
