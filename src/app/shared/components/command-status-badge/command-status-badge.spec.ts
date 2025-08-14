import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandStatusBadge } from './command-status-badge';

describe('CommandStatusBadge', () => {
  let component: CommandStatusBadge;
  let fixture: ComponentFixture<CommandStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandStatusBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandStatusBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
