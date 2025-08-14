import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPatterns } from './command-patterns';

describe('CommandPatterns', () => {
  let component: CommandPatterns;
  let fixture: ComponentFixture<CommandPatterns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPatterns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandPatterns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
