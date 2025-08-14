import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantUsers } from './tenant-users';

describe('TenantUsers', () => {
  let component: TenantUsers;
  let fixture: ComponentFixture<TenantUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
