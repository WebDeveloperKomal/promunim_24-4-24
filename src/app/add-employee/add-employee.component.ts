import { Component } from '@angular/core';
import { AddNewCustModel } from '../add-new-customer/add-new-customer.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee/employee.component.model';
import { SecurityService } from '../security.service';
import { AddEmployeeModel } from './addEmployeeModel';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { BranchModel } from '../branch/branch.component.model';
import { DepartmentModel } from '../department/department.component.model';
import { RoleModel } from './roleModel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  SearchText: any;

  page = 1;
  pageSize = 10;
  dataarray: AddNewCustModel[] = [];
  currentPage: number = 1;
  countries: AddNewCustModel[] | undefined;
  collectionSize = 100;
  addnewcustomer !: FormGroup;
  branches:BranchModel[] = [];
  mainDeps=[{id:0,mainDepName:''}];
  deps:DepartmentModel[] = [];
  roles: RoleModel[]=[];
  newEmployee:AddEmployeeModel = new AddEmployeeModel();
  empPhoto!: File;
  url: any;

  onFileSelected(event:any) {
    this.empPhoto = event.target.files[0];
  }

  constructor(private formBuilder: FormBuilder, private service:SecurityService, private apiService:ApiService) {
    this.addnewcustomer = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      joiningDate: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required],
      branchId: ['', Validators.required],
      mainDepId: ['', Validators.required],
      depId: ['', Validators.required],
      roleId: ['', Validators.required],
      assignedBranches: ['', Validators.required],
      rmCode: ['', Validators.required],
      proUserId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ngOnInit(){
    this.apiService.allBranches().subscribe(
      (res:any)=>{this.branches = res.data},
      (err:any)=>{console.log(err);
      }
    );

    this.apiService.allMainDepartments().subscribe(
      (res:any)=>{this.mainDeps = res.data},
      (err:any)=>{console.log(err);
      }
    );

    this.apiService.allDepartments().subscribe(
      (res:any)=>{this.deps = res.data},
      (err:any)=>{console.log(err);
      }
    );

    this.apiService.allRoles().subscribe(
      (res:any)=>{this.roles = res.data},
      (err:any)=>{console.log(err);
      }
    );
  }


   onSubmit(){
    console.log(this.newEmployee,this.empPhoto);
    this.service.addEmployee(this.newEmployee,this.empPhoto).subscribe(
      (res:any)=>{
        console.log(res);
        Swal.fire({
          title: "Record Saved!",
          icon: "success"
        });
        // setInterval(()=>{window.location.reload()},1000);
      },
      (err:any)=>{
        console.error(err);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
   }
   reset(){
    // window.location.reload();
   }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    const filteredData = [...this.dataarray];
    // this.dataarray = filteredData.filter((data) =>
    //   data.branchname.toLowerCase().includes(searchString) ||
    //   data.branchcode.toLowerCase().includes(searchString) ||
    //   data.branchcity.toLowerCase().includes(searchString) ||
    //   data.branchaddress.toLowerCase().includes(searchString)
    // );
  }
  refreshCountries() {
    this.countries = this.dataarray
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  
  triggerFileInput(): void {
    // document.getElementById('fileInput').click();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  }
}
