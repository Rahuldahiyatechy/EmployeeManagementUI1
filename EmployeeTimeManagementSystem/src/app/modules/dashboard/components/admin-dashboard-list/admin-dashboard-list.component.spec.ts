import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardListComponent } from './admin-dashboard-list.component';

describe('AdminDashboardListComponent', () => {
  let component: AdminDashboardListComponent;
  let fixture: ComponentFixture<AdminDashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
