import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineConfiguration } from './machine-configuration';

describe('MachineConfiguration', () => {
  let component: MachineConfiguration;
  let fixture: ComponentFixture<MachineConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
