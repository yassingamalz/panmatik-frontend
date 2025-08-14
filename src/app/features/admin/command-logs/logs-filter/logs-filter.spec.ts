import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsFilter } from './logs-filter';

describe('LogsFilter', () => {
  let component: LogsFilter;
  let fixture: ComponentFixture<LogsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
