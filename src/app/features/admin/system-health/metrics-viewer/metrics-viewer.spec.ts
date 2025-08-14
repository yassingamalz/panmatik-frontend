import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsViewer } from './metrics-viewer';

describe('MetricsViewer', () => {
  let component: MetricsViewer;
  let fixture: ComponentFixture<MetricsViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricsViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
