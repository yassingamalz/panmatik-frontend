import { TestBed } from '@angular/core/testing';

import { CommandLogApi } from './command-log-api';

describe('CommandLogApi', () => {
  let service: CommandLogApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandLogApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
