import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineForm } from './machine-form';

describe('MachineForm', () => {
  let component: MachineForm;
  let fixture: ComponentFixture<MachineForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
