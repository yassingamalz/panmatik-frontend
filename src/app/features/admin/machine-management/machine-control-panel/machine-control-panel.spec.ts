import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineControlPanel } from './machine-control-panel';

describe('MachineControlPanel', () => {
  let component: MachineControlPanel;
  let fixture: ComponentFixture<MachineControlPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineControlPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineControlPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
