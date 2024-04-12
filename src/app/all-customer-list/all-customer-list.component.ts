import { Component } from '@angular/core';
import { AllCustomerListModel } from './all-customer-list.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { DepartmentModel } from '../department/department.component.model';
import { SecurityService } from '../security.service';
import { EmployeeModel } from '../employee/employee.component.model';
import { RoleModel } from '../add-employee/roleModel';

@Component({
  selector: 'app-all-customer-list',
  templateUrl: './all-customer-list.component.html',
  styleUrls: ['./all-customer-list.component.css']
})
export class AllCustomerListComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: AllCustomerListModel[] = [];
  currentPage: number = 1;
  countries: AllCustomerListModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  insertemployee!:boolean;
  branches:BranchModel[] = [];
  mainDeps=[{id:0,mainDepName:''}];
  deps:DepartmentModel[] = [];
  originalEmployeesList: EmployeeModel[] = [];
  EmployeesList:EmployeeModel[]=[];
  roles: RoleModel[]=[];

  permissions: any;
  Perstring:any;
  // insertemployee!:boolean;
  deleteemployee!:boolean;
  updateemployee!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;
  maxSize: number = 6;

  allCust:AllCustomerListModel[]=[];
  originalallCust : AllCustomerListModel[] = [] ;

  constructor(private formBuilder: FormBuilder , private api:ApiService ,private service:SecurityService, private apiService:ApiService, private router:Router ) {
    this.employeeForm = this.formBuilder.group({
      location: ['', Validators.required], // Add validation if needed
      maindepartment: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required] // Add validation if needed
     
    });
  
}

ngOnInit(){
  this.api.allCustomer().subscribe(
    ( data: any) => {
      
      this.originalallCust = data.data;
      this.allCust = this.originalallCust ;
      this.collectionSize = data.data.length;
      console.log('Response successful Customer!',data.data);
      // localStorage.setItem('tid', data.data[0].tId);
      // console.log('tid', data.data[0].tId);
      
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );


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

edit(id : any){
  this.router.navigate(['/set/view-customer-details/'+id]);
}

applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.dataarray];
  this.allCust = this.originalallCust.filter((data) =>
    data.companyName.toLowerCase().includes(searchString) ||
    data.customerFullName.toLowerCase().includes(searchString) ||
    data.branch.toLowerCase().includes(searchString) ||
    (data.customerId !== null && !isNaN(data.customerId) && data.customerId.toString().includes(searchString)) ||
    (data.accountNo !== null && !isNaN(data.accountNo) && data.accountNo.toString().includes(searchString))
    // data.branchaddress.toLowerCase().includes(searchString)
  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}
}
