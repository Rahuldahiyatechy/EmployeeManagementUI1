import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TfrGridService } from '../../../../dataservices/tfr.grid.service';
import { Admin} from '../../../../models/admin.model ';
 
@Component({
  selector: 'app-admin-dashboard-list',
  templateUrl: './admin-dashboard-list.component.html',
  styleUrls: ['./admin-dashboard-list.component.css']
})
export class AdminDashboardListComponent implements OnInit {
  columns: any = [];
  columnDefs: any = [];
  self;
  Admin = new Admin();

  constructor(private tfrGridService: TfrGridService) { this.self = this; }

  ngOnInit() {
  }


  navigateToCreateNew()
  {
    console.log("hi");
  }

  ngAfterViewInit() {
    this.generateTableStructure();

  }
  //employeeid: number;
  //Name: string;
  //starttime: any;
  //endtime: any;
  //totaltime: any;


  generateTableStructure() {

    this.columns = [
      // instead of title you can also define the headers in html as well. This just gives a dynamic naming for headers.
      {
        data: 'Actions', name: 'Actions', title: 'Actions',
        render: (data, type, row) => this.tfrGridService.getActionsColumn(data, row, type, row.id, true, true), class: 'width-5'
      },

      { data: 'employeeid', name: 'employeeid', title: 'Employee id', class: 'width-5' },


      { data: 'name', name: 'name', title: 'Name', class: 'width-5' },
      { data: 'starttime', name: 'starttime', title: 'Start Time', class: 'width-5' },
      { data: 'endtime', name: 'endtime', title: 'End Time', class: 'width-5' },
      { data: 'totaltime', name: 'totaltime', title: 'Total Time', class: 'width-5' },

    ];

    this.columnDefs = null;
    this.columnDefs = [
      {
        className: 'dt-centered-column',
        targets: [5]
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
      'Admin/get',
      'tblAdmin',
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

      const DepartmentId = $(e.target).data('entityid');
      that.navigateTo(DepartmentId);
      //this.toastrService.success('Thank you', 'You successfully redirected to Edit the Record having Id' + DepartmentId);


    });

    $('.delete-icon').on('click', null, (e) => {
      debugger;

      const Department_DeleteId = $(e.target).data('dri-id');
      that.deleteConfirmation(Department_DeleteId);
    });

  }


  //navigateTo = (DepartmentId) => {
  //  this.router.navigateByUrl(`DepartmentEdit/edit/${DepartmentId}`);
  //}


  gridLoadedCompletely() {

  }

  //navigateToCreateNew = () => {
  //  this.router.navigateByUrl(`DepartmentEdit`);
  //  this.toastrService.success('Thank you', 'You successfully redirected to Department');
  //}



  //deleteConfirmation = (Department_DeleteId) => {
  //  debugger;
  //  this.deleteDepartmentId = Department_DeleteId;
  //  this.confirmationCallBack();
  //}

  //confirmationCallBack = () => {
  //  debugger;

  //  this._departmentdataService.deleteDepartmentRecord(this.deleteDepartmentId).subscribe(
  //    savedDepartmentRecordById => this.sDeleteDepartmentRecord(savedDepartmentRecordById),
  //    err => this.fSaveServingArea(err)
  //  );
  //}




  //sDeleteDepartmentRecord(savedDepartmentRecordById) {
  //  console.log(savedDepartmentRecordById);
  //  this.generateTableStructure();
  //  this.toastrService.warning('Record is deleted Successfully');
  //}

  //fSaveServingArea(err) {
  //  const errMessage = err && err.Message ? '</br>Error Message:</br>' + err.Message : '';
  //  this.toastrService.warning('Error While  deleting the Record');
  //}

}  
