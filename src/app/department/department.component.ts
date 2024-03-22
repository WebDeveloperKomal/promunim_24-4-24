import { Component } from '@angular/core';
import { DepartmentModel } from './department.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
interface BranchData {
  branchid: number;
  branchname: string;
  branchcode: string;
  branchcity: string;
  branchaddress: string;
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: DepartmentModel[] = [];
  currentPage: number = 1;
  countries:DepartmentModel [] | undefined;
  collectionSize =100;
  departmentList:DepartmentModel[]=[];
  OriginaldepartmentList : DepartmentModel[] = [];

  permissions: any;
  Perstring:any;
  insertdepartment!:boolean;
  deletedepartment!:boolean;
  updatedepartment!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;

  constructor(private apiService:ApiService, private router:Router) {}

  ngOnInit(){
    this.Perstring = localStorage.getItem('permissions');
    if (this.Perstring) {
      this.permissions = JSON.parse(this.Perstring);
      this.permissions.forEach((permission: number) => {
        if (permission === 1119){this.insertdepartment = true};
        if (permission === 1120){this.deletedepartment = true};
        if (permission === 1121){this.updatedepartment = true};
        if (permission === 1122){this.view = true};
        if (permission === 1123){this.viewRM = true};
        if (permission === 1124){this.viewbranch = true};
        if (permission === 1125){this.viewall = true};
      });
    } else {
      console.log('No permissions data found in local storage.');
    };

    this.alldepartment();

  }

  alldepartment(){
    
    this.apiService.allDepartments().subscribe(
      (response:any)=>{
        this.OriginaldepartmentList =response.data;
        this.departmentList = this.OriginaldepartmentList ;

        this.collectionSize = response.data.length
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  edit(id:number){
    this.router.navigate([`/set/view-department/`+id]);
  }

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
        this.apiService.deleteDepartment(id).subscribe(
        (res:any)=>{
          console.log(res.data);
          Swal.fire({
            title: "Record Deleted!",
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
      });
  }







  applyFilter(): void {
    
   const searchstring = this.SearchText.toLowerCase();
   this.departmentList = this.OriginaldepartmentList.filter((data) =>
      data.departmentName.toLowerCase().includes(searchstring)||
      data.mainDepName.toLowerCase().includes(searchstring)
   
   )
  
   }
   refreshCountries() {
     this.countries = this.dataarray
       .map((country, i) => ({id: i + 1, ...country}))
       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
   }
   


}
