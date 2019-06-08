import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AttandanceComponent } from './modules/attandance/components/attandance/attandance.component';
import { RegistrationEditComponent } from './modules/registration/components/registration-edit/registration-edit.component';
import { RegistrationListComponent } from './modules/registration/components/registration-list/registration-list.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { AdminDashboardEditComponent } from './modules/dashboard/components/admin-dashboard-edit/admin-dashboard-edit.component';
import { AdminDashboardListComponent } from './modules/dashboard/components/admin-dashboard-list/admin-dashboard-list.component';
import { UserDashboardEditComponent } from './modules/dashboard/components/user-dashboard-edit/user-dashboard-edit.component';
import { UserDashboardListComponent } from './modules/dashboard/components/user-dashboard-list/user-dashboard-list.component';
import { DocumentEditComponent } from './modules/document/components/document-edit/document-edit.component';
import { DocumentListComponent } from './modules/document/components/document-list/document-list.component';
import { RoleListComponent } from './modules/role/components/role-list/role-list.component';
import { RoleEditComponent } from './modules/role/components/role-edit/role-edit.component';

const routes: Routes = [
  {path:'Attandance', component:AttandanceComponent, pathMatch:'full'},
  {path:'RegistrationEdit', component:RegistrationEditComponent},
  {path:'RegistrationList', component:RegistrationListComponent},
  {path:'Login', component:LoginComponent},
  {path:'AdminDashboardEdit', component:AdminDashboardEditComponent},
  {path:'AdminDashboardList', component:AdminDashboardListComponent},
  {path:'UserDashboardEdit', component:UserDashboardEditComponent},
  {path:'UserDashboardList', component:UserDashboardListComponent},
  {path:'DocumentEdit', component:DocumentEditComponent},
  { path: 'DocumentList', component: DocumentListComponent },
  { path: 'RoleList', component: RoleListComponent },
  { path: 'RoleEdit', component: RoleEditComponent },
  { path: 'RoleEdit/edit/:id', component: RoleEditComponent },

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
