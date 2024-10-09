import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCustomerPage } from './admin-customer.page';

describe('AdminCustomerPage', () => {
  let component: AdminCustomerPage;
  let fixture: ComponentFixture<AdminCustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
