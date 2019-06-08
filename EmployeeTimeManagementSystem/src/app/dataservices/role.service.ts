import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROOT_URL } from '../models/config'



@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpclient: HttpClient, private route: ActivatedRoute, ) {}

  RoleDetailById(RoleId: string): any {
    //  debugger;
    return this.httpclient.get<any>(ROOT_URL + `Role/get/${RoleId}`);
  }

  saveRoleData(role: any, isCreateMode: boolean): any {
    debugger;
    let data = { "Id": role.id, "Name": role.name};
    return isCreateMode
      ? this.httpclient.post<any>(ROOT_URL + `Role/create`, data)
      : this.httpclient.post<any>(ROOT_URL + `Role/update`, data);
  }

  deleteRoleRecord(deleteRoleId: boolean): any {
    //debugger;
    return this.httpclient.get<any>(ROOT_URL + `Role/delete/${deleteRoleId}`);

  }

}


//saveDepartmentData(department: any, isCreateMode: boolean): any {
//  //debugger;
//  let data = { "Id": department.id, "Name": department.name, "Description": department.description };
//  return isCreateMode
//    ? this.httpclient.post<any>(ROOT_URL + `Department/create`, data)
//    : this.httpclient.post<any>(ROOT_URL + `Department/update`, data);
//}

//deleteDepartmentRecord(deleteDepartmentId: boolean): any {
//  //debugger;
//  return this.httpclient.get<any>(ROOT_URL + `Department/delete/${deleteDepartmentId}`);

//}
