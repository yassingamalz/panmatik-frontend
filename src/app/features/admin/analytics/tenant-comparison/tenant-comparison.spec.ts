import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantComparison } from './tenant-comparison';

describe('TenantComparison', () => {
  let component: TenantComparison;
  let fixture: ComponentFixture<TenantComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
