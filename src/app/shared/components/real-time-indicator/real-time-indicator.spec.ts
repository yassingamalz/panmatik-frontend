import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeIndicator } from './real-time-indicator';

describe('RealTimeIndicator', () => {
  let component: RealTimeIndicator;
  let fixture: ComponentFixture<RealTimeIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
