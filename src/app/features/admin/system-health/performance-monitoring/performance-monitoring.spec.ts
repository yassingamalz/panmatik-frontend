import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMonitoring } from './performance-monitoring';

describe('PerformanceMonitoring', () => {
  let component: PerformanceMonitoring;
  let fixture: ComponentFixture<PerformanceMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceMonitoring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
