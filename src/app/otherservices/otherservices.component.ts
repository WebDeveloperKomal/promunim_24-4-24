import { Component } from '@angular/core';
import { OtherServicesModel } from './otherservices.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otherservices',
  templateUrl: './otherservices.component.html',
  styleUrls: ['./otherservices.component.css']
})
export class OtherservicesComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: OtherServicesModel[] = [];
  currentPage: number = 1;
  countries: OtherServicesModel [] | undefined;
  collectionSize =100;
  servicesList:OtherServicesModel[]=[];
  OriginalservicesList : OtherServicesModel[] = [] ;

    
  permissions: any;
  Perstring:any;
  insertotherservice!:boolean;
  deleteotherservice!:boolean;
  updateotherservice!:boolean;
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
        if (permission === 1161){this.insertotherservice = true};
        if (permission === 1162){this.deleteotherservice = true};
        if (permission === 1163){this.updateotherservice = true};
        if (permission === 1164){this.view = true};
        if (permission === 1165){this.viewRM = true};
        if (permission === 1166){this.viewbranch = true};
        if (permission === 1167){this.viewall = true};
      });
    } else {
      console.log('No permissions data found in local storage.');
    };


    this.allOtherservices() ;

  
  }


  allOtherservices(){
    this.apiService.allOtherServices().subscribe(
      (response:any)=>{
        this.OriginalservicesList = response.data;
        this.servicesList = this.OriginalservicesList ;
        this.collectionSize = response.data.length ;
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  edit(id:number){
    this.router.navigate(['/set/view-other-services/'+id]);
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
        this.apiService.deleteService(id).subscribe(
          (response:any)=>{
            console.log(response); 
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




  applyFilter(): void {
    const searchString = this.SearchText.toLowerCase();
    // const filteredData = [...this.servicesList];
    this.servicesList = this.OriginalservicesList.filter((data) =>
      data.serviceName.toLowerCase().includes(searchString) ||
      data.description.toLowerCase().includes(searchString) ||
      (data.fees !== null && !isNaN(data.fees) && data.fees.toString().includes(searchString)) ||
      (data.serviceId !== null && !isNaN(data.serviceId) && data.serviceId.toString().includes(searchString)) 
    
    );
  }
  refreshCountries() {
    this.countries = this.servicesList
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }



}
