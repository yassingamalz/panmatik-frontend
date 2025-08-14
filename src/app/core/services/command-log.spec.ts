import { TestBed } from '@angular/core/testing';

import { CommandLog } from './command-log';

describe('CommandLog', () => {
  let service: CommandLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
