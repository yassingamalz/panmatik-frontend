import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageMetrics } from './usage-metrics';

describe('UsageMetrics', () => {
  let component: UsageMetrics;
  let fixture: ComponentFixture<UsageMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
