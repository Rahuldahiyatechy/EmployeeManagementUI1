import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardListComponent } from './user-dashboard-list.component';

describe('UserDashboardListComponent', () => {
  let component: UserDashboardListComponent;
  let fixture: ComponentFixture<UserDashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
