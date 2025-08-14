import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeStream } from './real-time-stream';

describe('RealTimeStream', () => {
  let component: RealTimeStream;
  let fixture: ComponentFixture<RealTimeStream>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeStream]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeStream);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
