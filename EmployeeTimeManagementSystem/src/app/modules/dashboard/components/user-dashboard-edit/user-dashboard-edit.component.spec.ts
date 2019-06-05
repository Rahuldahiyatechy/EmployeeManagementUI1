import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardEditComponent } from './user-dashboard-edit.component';

describe('UserDashboardEditComponent', () => {
  let component: UserDashboardEditComponent;
  let fixture: ComponentFixture<UserDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
