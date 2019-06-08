import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../../../dataservices/role.service';
import { Role } from '../../../../models/role.model ';
import {TfrGridService } from '../../../../dataservices/tfr.grid.service';


@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  Role = new Role();
  isCreateMode = false;

  constructor(private tfrGridService: TfrGridService, private route: ActivatedRoute, private router: Router, private roleService: RoleService)
  { }


  ngOnInit() {
    //debugger;
    const RoleId = this.route.snapshot.paramMap.get('id');
    if (!RoleId) {
      this.isCreateMode = true;
    } else {
      this.roleService.RoleDetailById(RoleId).subscribe(
        returnedRoleDetail => this.roleSuccess(returnedRoleDetail),
      );
    }
  }


  roleSuccess(Role) {
     debugger;
    this.Role = Role;
  }


  saveChanges() {
    debugger;
    this.roleService.saveRoleData(this.Role, this.isCreateMode).subscribe(
      savedRoleData => this.sRoleData(savedRoleData),
      err => this.fSaveRoleData(err),
      () => this.aSaveRoleData()
    );
  }


  sRoleData(savedRoleCode) {
    console.log(savedRoleCode);
        this.router.navigateByUrl(`RoleList`)
  }
  fSaveRoleData(err) {
    const errMessage = err && err.Message ? '</br>Error Message:</br>' + err.Message : '';
      }

  aSaveRoleData() {
    console.log('Department data saved successfully!');
  }


}
