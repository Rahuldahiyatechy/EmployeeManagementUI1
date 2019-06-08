import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROOT_URL } from '../models/config'



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpclient: HttpClient, private route: ActivatedRoute, ) { }

  RegistrationDetailById(RegistrationId: string): any {
    //  debugger;
    return this.httpclient.get<any>(ROOT_URL + `Registration/get/${RegistrationId}`);
  }

  saveRegistrationData(registration: any, isCreateMode: boolean): any {
    debugger;
    let data = { "Id": registration.id, "Name": registration.name };
    return isCreateMode
      ? this.httpclient.post<any>(ROOT_URL + `Registration/create`, data)
      : this.httpclient.post<any>(ROOT_URL + `Registration/update`, data);
  }

  deleteRegistrationRecord(deleteRegistrationId: boolean): any {
    //debugger;
    return this.httpclient.get<any>(ROOT_URL + `Registration/delete/${deleteRegistrationId}`);

  }

}

