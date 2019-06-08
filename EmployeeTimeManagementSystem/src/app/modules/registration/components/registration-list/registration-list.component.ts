import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TfrGridService } from '../../../../dataservices/tfr.grid.service';
import { Registration } from '../../../../models/Registration.model';
import { RegistrationService } from '../../../../dataservices/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {


  columns: any = [];
  columnDefs: any = [];
  self;
  Registration = new Registration();
  deleteRegistrationId: boolean;
  constructor(private router: Router, private tfrGridService: TfrGridService, private registrationService: RegistrationService) { this.self = this; }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.generateTableStructure();

  }

  generateTableStructure() {
    //debugger;
    this.columns = [
      // instead of title you can also define the headers in html as well. This just gives a dynamic naming for headers.
      {
        data: 'Actions', name: 'Actions', title: 'Actions',
        render: (data, type, row) => this.tfrGridService.getActionsColumn(data, row, type, row.id, true, true), class: 'width-5'
      },

      { data: 'id', name: 'id', title: 'Role id', class: 'width-5' },


      { data: 'name', name: 'name', title: 'Name', class: 'width-5' },

      { data: 'password', name: 'password', title: 'Password', class: 'width-5' },
      { data: 'roleid', name: 'roleid', title: 'Role Id', class: 'width-5' },
      { data: 'dateofjoining', name: 'dateofjoining', title: 'Date of Joining', class: 'width-5' },
      { data: 'designation', name: 'designation', title: 'Designation', class: 'width-5' },
      { data: 'phone', name: 'phone', title: 'Phone', class: 'width-5' },
      { data: 'dateofbirth', name: 'dateofbirth', title: 'Date of Birth', class: 'width-5' },
      { data: 'hometown', name: 'hometown', title: 'Home Town', class: 'width-5' },
      { data: 'district', name: 'district', title: 'District', class: 'width-5' },
      { data: 'state', name: 'state', title: 'State', class: 'width-5' },
      { data: 'zipcode', name: 'zipcode', title: 'Zip Code', class: 'width-5' },

    ];


    this.columnDefs = null;
    this.columnDefs = [
      {
        className: 'dt-centered-column',
        targets: [12]
      },
      {
        targets: [0],//disable sorting on logo column 
        orderable: false
      }
      // {
      //     targets: [this.actionsColumnIndex],//disable sorting on Actions column 
      //     orderable: false
      // },
      // {
      //     targets: [this.idColumnIndex],//hide ID column
      //     visible: false
      // },
      // {
      //     targets: [this.logoColumnIndex],//disable sorting on logo column 
      //     orderable: false 
      // }
    ];

    this.tfrGridService.fetchGridData(
      false,
      'get',
      'Registration/get',
      'tblRegistration',
      this.columns,
      10,
      this.columnDefs,
      0,
      'asc',
      null,
      this.gridDrawCompletedCallBack,
      this.gridLoadedCompletely,
      true,
      null,
      false);

  }

  gridDrawCompletedCallBack = () => {
    const that = this.self; // get the class instance
    // bind the action column event when dynamic content is generated 
    $('.edit-icon').on('click', null, (e) => {

      const RegistrationId = $(e.target).data('entityid');
      debugger;
      that.navigateTo(RegistrationId);
      //this.toastrService.success('Thank you', 'You successfully redirected to Edit the Record having Id' + DepartmentId);


    });

    $('.delete-icon').on('click', null, (e) => {
      debugger;

      const Registration_DeleteId = $(e.target).data('dri-id');
      that.deleteConfirmation(Registration_DeleteId);
    });

  }


  navigateTo = (RegistrationId) => {
    //debugger;
    this.router.navigateByUrl(`RegistrationEdit/edit/${RegistrationId}`);
  }


  gridLoadedCompletely() {

  }

  navigateToCreateNew = () => {
    //debugger;
    this.router.navigateByUrl(`RegistrationEdit`);
    // this.toastrService.success('Thank you', 'You successfully redirected to Department');
  }



  deleteConfirmation = (Registration_DeleteId) => {
    debugger;
    this.deleteRegistrationId = Registration_DeleteId;
    this.confirmationCallBack();
  }

  confirmationCallBack = () => {
    debugger;

    this.registrationService.deleteRegistrationRecord(this.deleteRegistrationId).subscribe(
      savedRegistrationRecordById => this.sDeleteRegistrationRecord(savedRegistrationRecordById),
      err => this.fSaveServingArea(err)
    );
  }




  sDeleteRegistrationRecord(savedRegistrationRecordById) {
    console.log(savedRegistrationRecordById);
    this.generateTableStructure();
    //this.toastrService.warning('Record is deleted Successfully');
  }

  fSaveServingArea(err) {
    const errMessage = err && err.Message ? '</br>Error Message:</br>' + err.Message : '';
    // this.toastrService.warning('Error While  deleting the Record');
  }

}  
