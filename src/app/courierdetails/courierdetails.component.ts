import { Component } from '@angular/core';
import { courierdetailsModel } from './courierdetails.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courierdetails',
  templateUrl: './courierdetails.component.html',
  styleUrls: ['./courierdetails.component.css']
})
export class CourierdetailsComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: courierdetailsModel [] = [];
  currentPage: number = 1;
  countries: courierdetailsModel [] | undefined;
  collectionSize =100;
  userRole:any;
  couriorList:courierdetailsModel[]=[];
  OriginalCourierList : courierdetailsModel[] =[] ;

  permissions: any;
  Perstring:any;
  insertcourior!:boolean;
  deletecourior!:boolean;
  updatecourior!:boolean;
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
        if (permission === 1140){this.insertcourior = true};
        if (permission === 1141){this.deletecourior = true};
        if (permission === 1142){this.updatecourior = true};
        if (permission === 1143){this.view = true};
        if (permission === 1144){this.viewRM = true};
        if (permission === 1145){this.viewbranch = true};
        if (permission === 1146){this.viewall = true};
      });
    } else {
      console.log('No permissions data found in local storage.');
    };


    this.allCourier() ;
    
  }



  allCourier(){
    this.apiService.allCouriors().subscribe(
      (response:any)=>{
        this.OriginalCourierList=response.data;
        this.couriorList = this.OriginalCourierList ;
        this.collectionSize = response.data.length;
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }

  edit(id:any){
    this.router.navigate(['/set/view-courier/'+id]);
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
        this.apiService.deleteCourior(id).subscribe(
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
    const searchString = this.SearchText.toLowerCase();
    // const filteredData = [...this.couriorList];
    this.couriorList = this.OriginalCourierList.filter((data) =>
      data.name.toLowerCase().includes(searchString) ||
      data.address.toLowerCase().includes(searchString) ||
      data.phoneNo.toLowerCase().includes(searchString) ||
      data.fax.toLowerCase().includes(searchString) ||
      data.emailId.toLowerCase().includes(searchString) 
  
      
    );
  }
  refreshCountries() {
    this.couriorList = this.couriorList
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }



}
