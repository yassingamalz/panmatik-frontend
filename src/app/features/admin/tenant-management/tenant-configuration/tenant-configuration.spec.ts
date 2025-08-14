import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantConfiguration } from './tenant-configuration';

describe('TenantConfiguration', () => {
  let component: TenantConfiguration;
  let fixture: ComponentFixture<TenantConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
