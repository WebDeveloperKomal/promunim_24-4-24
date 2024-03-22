import { Component } from '@angular/core';
import { EmployeeModel } from './employee.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { SecurityService } from '../security.service';
import { AddEmployeeModel } from '../add-employee/addEmployeeModel';
import Swal from 'sweetalert2';
import { BranchModel } from '../branch/branch.component.model';
import { DepartmentModel } from '../department/department.component.model';
import { RoleModel } from '../add-employee/roleModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: EmployeeModel[] = [];
  currentPage: number = 1;
  countries: EmployeeModel[] | undefined;
  collectionSize = 0;
  userRole:any;
  employeeForm !: FormGroup;
  employeeForm1 !: FormGroup;
  EmployeesList:EmployeeModel[]=[];
  originalEmployeesList: EmployeeModel[] = [];
  employee:EmployeeModel = new EmployeeModel();
  EmployeeData:AddEmployeeModel = new AddEmployeeModel();
  empPhoto!: File;
  url: any;
  selecteddata : any ;
  branches:BranchModel[] = [];
  mainDeps=[{id:0,mainDepName:''}];
  deps:DepartmentModel[] = [];
  roles: RoleModel[]=[];

  permissions: any;
  Perstring:any;
  insertemployee!:boolean;
  deleteemployee!:boolean;
  updateemployee!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;
  maxSize: number = 6;
  onFileSelected(event:any) {
    this.empPhoto = event.target.files[0];
  }
  constructor(private formBuilder: FormBuilder , private service:SecurityService, private apiService:ApiService) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], 
      maindepartment: ['', Validators.required], 
      department: ['', Validators.required]
    });

    this.employeeForm1 = this.formBuilder.group({
      empId: ['', Validators.required], 
      employeeId: ['', Validators.required], 
      firstName: ['', Validators.required], 
      middleName: ['', Validators.required] ,
      lastName: ['', Validators.required] ,
      dateOfBirth: ['', Validators.required] ,
      joiningDate: ['', Validators.required] ,
      contactNo: ['', Validators.required] ,
      email: ['', Validators.required] ,
      branchId: ['', Validators.required] ,
      mainDepId: ['', Validators.required] ,
      depId: ['', Validators.required] ,
      roleId: ['', Validators.required] ,
      rmCode: ['', Validators.required] ,
      assignedBranch: ['', Validators.required] ,
      profileUserId: ['', Validators.required] ,
  
    });
  }

  ngOnInit(){
    this.Perstring = localStorage.getItem('permissions');
    if (this.Perstring) {
      this.permissions = JSON.parse(this.Perstring);
      this.permissions.forEach((permission: number) => {
        if (permission === 1105){this.insertemployee = true};
        if (permission === 1106){this.deleteemployee = true};
        if (permission === 1107){this.updateemployee = true};
        if (permission === 1108){this.view = true};
        if (permission === 1109){this.viewRM = true};
        if (permission === 1110){this.viewbranch = true};
        if (permission === 1111){this.viewall = true};
      });
    } else {
      console.log('No permissions data found in local storage.');
    };
    this.service.allEmployees().subscribe(
      (response:any)=>{
        console.log(response.data);        
        this.originalEmployeesList =response.data;
        this.EmployeesList = this.originalEmployeesList ;
        this.collectionSize = response.data.length;
      },
      (error:any)=>{
        console.error(error);        
      }
    );

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

  
  update(){
    console.log(this.employeeForm1.value,this.empPhoto);
    this.service.updateEmployee(this.employeeForm1.value,this.empPhoto).subscribe(
      (res:any)=>{
        console.log(res);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
      },
      (err:any)=>{
        console.error(err);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    );
    // setInterval(()=>{window.location.reload()},1000);
   }

   deletePhoto(){}
  
   delete(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) 
      {
        this.service.deleteEmployee(id).subscribe(
          (response:any)=>{
            console.log(response.data); 
            Swal.fire({
              title: "Record Deleted!",
              icon: "success"
            });
          },
          (error:any)=>{
            console.error(error);
            Swal.fire({
              title: "Error!",
              icon: "error"
            });
          }
        );
        // setInterval(()=>{window.location.reload()},1000);        
      }
    });
    
  }


// applyFilter(): void {
//   const searchString = this.SearchText.toLowerCase();
//   const filteredData = [...this.EmployeesList];
//   this.EmployeesList = filteredData.filter((data) =>
//     data.empCode.toLowerCase().includes(searchString) ||
//     data.firstName.toLowerCase().includes(searchString) ||
//     data.middleName.toLowerCase().includes(searchString) ||
//     data.lastName.toLowerCase().includes(searchString) ||
//     (data.contactNo !== null && !isNaN(data.contactNo) && data.contactNo.toString().includes(searchString)) ||
//     data.branchName.toLowerCase().includes(searchString) ||
//     data.depName.toLowerCase().includes(searchString) ||
//     data.mainDepName.toLowerCase().includes(searchString) ||
//     data.roleName.toLowerCase().includes(searchString) 
//   );
// }

// applyFilter(): void {
//   if (!this.SearchText) {
    
//     this.EmployeesList = [...this.EmployeesList];
//     return;
//   }
//   const searchString = this.SearchText.toLowerCase();
//   this.EmployeesList = this.EmployeesList.filter((data) =>
//   (data.empCode !== null && !isNaN(data.empCode) && data.empCode.toString().includes(searchString)) ||

//     data.firstName.toLowerCase().includes(searchString) ||
//     data.middleName.toLowerCase().includes(searchString) ||
//     data.lastName.toLowerCase().includes(searchString) ||
//     (data.contactNo !== null && !isNaN(data.contactNo) && data.contactNo.toString().includes(searchString)) ||
//      data.branchName.toLowerCase().includes(searchString) ||
//      data.depName.toLowerCase().includes(searchString) ||
//        data.mainDepName.toLowerCase().includes(searchString) ||
//          data.roleName.toLowerCase().includes(searchString) 
//   );

    
// }


applyFilter(): void {
 

  const searchString = this.SearchText.toLowerCase();
  this.EmployeesList = this.originalEmployeesList.filter((data) =>
    (data.empCode !== null && !isNaN(data.empCode) && data.empCode.toString().includes(searchString)) ||
    data.firstName.toLowerCase().includes(searchString) ||
    data.middleName.toLowerCase().includes(searchString) ||
    data.lastName.toLowerCase().includes(searchString) ||
    (data.contactNo !== null && !isNaN(data.contactNo) && data.contactNo.toString().includes(searchString)) ||
    data.branchName.toLowerCase().includes(searchString) ||
    data.depName.toLowerCase().includes(searchString) ||
    data.mainDepName.toLowerCase().includes(searchString) ||
    data.roleName.toLowerCase().includes(searchString)
  );
}

refreshCountries() {
  this.countries = this.EmployeesList
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


ShowDetails(data : any){
  this.selecteddata = data;
   this.loadEmployeeData();
}

loadEmployeeData() {
 
  const selectedEmployeeId = this.selecteddata.empId;
  const selectedEmployee = this.EmployeesList.find(
    (employee) => employee.empId === selectedEmployeeId
  );

  if (selectedEmployee) {
   
    this.employeeForm1.patchValue({
      empId:selectedEmployee.empId ,
      employeeId:selectedEmployee.empCode , 
      firstName:selectedEmployee.firstName ,
      middleName:selectedEmployee.middleName ,
      lastName: selectedEmployee.lastName ,
      dateOfBirth:selectedEmployee.dob ,
      joiningDate: selectedEmployee.joiningDate ,
      contactNo:selectedEmployee.contactNo ,
      email: selectedEmployee.userName ,
      branchId:selectedEmployee.branchId ,
      mainDepId:selectedEmployee.mainDepId ,
      depId: selectedEmployee.depId ,
      roleId: selectedEmployee.roleId ,
      rmCode:selectedEmployee.rmCode ,
      assignedBranch:selectedEmployee.assignedBranches ,
      profileUserId:selectedEmployee.proUserId ,
    
    });
    } else {
      console.error('Selected employee not found in the list');
  }
}




triggerFileInput(): void {
  // document.getElementById('fileInput').click();
  const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
  if (fileInput) {
    fileInput.click();
  }
}

showEllipsis(): boolean {
  return this.collectionSize > this.maxSize;
}

}
