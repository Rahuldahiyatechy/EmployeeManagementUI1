import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardEditComponent } from './admin-dashboard-edit.component';

describe('AdminDashboardEditComponent', () => {
  let component: AdminDashboardEditComponent;
  let fixture: ComponentFixture<AdminDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
