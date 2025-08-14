import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsAnalytics } from './logs-analytics';

describe('LogsAnalytics', () => {
  let component: LogsAnalytics;
  let fixture: ComponentFixture<LogsAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
