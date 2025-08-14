import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineStatus } from './machine-status';

describe('MachineStatus', () => {
  let component: MachineStatus;
  let fixture: ComponentFixture<MachineStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
