import { Component } from '@angular/core';
import { BranchModel } from './branch.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: BranchModel[] = [];
  currentPage: number = 1;
  countries: BranchModel[] | undefined;
  collectionSize =100;
  branchList:BranchModel[] = [];
  originalBranchList: BranchModel[] = []; 
  branch: BranchModel = new BranchModel();
  
  permissions: any;
  Perstring:any;
  insertbranch!:boolean;
  deletebranch!:boolean;
  updatebranch!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;


  constructor(private service:ApiService, private router:Router) {}

  ngOnInit(){
    this.Perstring = localStorage.getItem('permissions');
    if (this.Perstring) {
      this.permissions = JSON.parse(this.Perstring);
      this.permissions.forEach((permission: number) => {
        if (permission === 1112){this.insertbranch = true};
        if (permission === 1113){this.deletebranch = true};
        if (permission === 1114){this.updatebranch = true};
        if (permission === 1115){this.view = true};
        if (permission === 1116){this.viewRM = true};
        if (permission === 1117){this.viewbranch = true};
        if (permission === 1118){this.viewall = true};
      });
    } else {
      console.log('No permissions data found.');
    };

this.allbranch();
   
  }

  allbranch(){
    this.service.allBranches().subscribe(
      ( data: any) => {
        this.originalBranchList=data.data;
        this.branchList = this.originalBranchList;
        this.collectionSize = data.data.length ;
        console.log('Response successful!' ,data.data);
        console.log('Response successful!' ,data.data[0].branchCity);
      },
      (error:any) => {
        console.error('API Error:', error);
      }
    );
  }

  delete(id:any){
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
        this.service.deleteBranch(id).subscribe(
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

  edit(id:any){
    this.router.navigate([`/set/view-branch/`+id])
  }

  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase().trim();
  
    // if (!searchString) {
    // this.allbranch();
    //   return;
    // }
  
    this.branchList = this.originalBranchList.filter((data) =>
      data.branchName.toLowerCase().includes(searchString) ||
      data.branchCode.toLowerCase().includes(searchString) ||
      data.branchCity.toLowerCase().includes(searchString) ||
      data.branchAddress.toLowerCase().includes(searchString) ||
      (data.branchId !== null && !isNaN(data.branchId) && data.branchId.toString() === searchString)
    );
  }
  


//   applyFilter(): void {
//     const searchString = this.SearchText.toLowerCase();
//     if (!this.SearchText || searchString.trim() === '' || this.SearchText=="") {
      
//       this.branchList = [...this.branchList];
//       return;
//     }
    
//     this.branchList = this.branchList.filter((data) =>
//       data.branchName.toLowerCase().includes(searchString) ||
//       data.branchCode.toLowerCase().includes(searchString) ||
//       data.branchCity.toLowerCase().includes(searchString) ||
//       data.branchAddress.toLowerCase().includes(searchString) ||
//       (data.branchId !== null && !isNaN(data.branchId) && data.branchId.toString().includes(searchString)) 
//  );

  
      
//   }


  
  onKeyUp(event: KeyboardEvent): void {
    // Check if the key released is the backspace key (keyCode 8)
    if (event.key === 'Backspace') {
      this.applyFilter() ;
    }
  }
  // refreshCountries() {
  //   this.countries = this.dataarray
  //     .map((country, i) => ({id: i + 1, ...country}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
  refreshCountries() {
    this.page = Math.ceil((this.page - 1) * this.pageSize / this.pageSize) + 1;
    this.countries = this.dataarray
        .map((country, i) => ({ id: i + 1, ...country }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}



}

