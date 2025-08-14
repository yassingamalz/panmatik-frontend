import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendAnalysis } from './trend-analysis';

describe('TrendAnalysis', () => {
  let component: TrendAnalysis;
  let fixture: ComponentFixture<TrendAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
