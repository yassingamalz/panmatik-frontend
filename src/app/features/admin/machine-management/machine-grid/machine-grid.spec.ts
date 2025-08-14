import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineGrid } from './machine-grid';

describe('MachineGrid', () => {
  let component: MachineGrid;
  let fixture: ComponentFixture<MachineGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
