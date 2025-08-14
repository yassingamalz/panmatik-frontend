import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDetails } from './command-details';

describe('CommandDetails', () => {
  let component: CommandDetails;
  let fixture: ComponentFixture<CommandDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
