import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIndicator } from './health-indicator';

describe('HealthIndicator', () => {
  let component: HealthIndicator;
  let fixture: ComponentFixture<HealthIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
