import { TestBed } from '@angular/core/testing';

import { TenantApi } from './tenant-api';

describe('TenantApi', () => {
  let service: TenantApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
