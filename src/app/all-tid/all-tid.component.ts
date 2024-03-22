import { Component } from '@angular/core';
import { AllTIDModel } from './all-tid.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchModel } from '../branch/branch.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-tid',
  templateUrl: './all-tid.component.html',
  styleUrls: ['./all-tid.component.css']
})
export class AllTIDComponent {
  SearchText : any ;
  page = 1;
  pageSize = 10 ;
  dataarray: AllTIDModel[] = [];
  currentPage: number = 1;
  countries: AllTIDModel[] | undefined;
  collectionSize =100;
  TIDList:AllTIDModel[] = [];
  originalTIDList : AllTIDModel[] = [] ;
  branches:BranchModel[]=[];
  tidForm !: FormGroup;

  permissions: any;
  Perstring:any;
  inserttid!:boolean;
  deletetid!:boolean;
  updatetid!:boolean;
  view!:boolean;
  viewRM!:boolean;
  viewbranch!:boolean;
  viewall!:boolean;

  constructor(private service:ApiService , private router:Router,private formBuilder: FormBuilder ) {
    this.tidForm = this.formBuilder.group({
      branch: ['', Validators.required], // Add validation if needed
      fromDate: ['', Validators.required], // Add validation if needed
      toDate: ['', Validators.required] ,
     
     
    });
   }
 
  ngOnInit(){
    this.Perstring = localStorage.getItem('permissions');
    if (this.Perstring) {
      this.permissions = JSON.parse(this.Perstring);
      this.permissions.forEach((permission: number) => {
        if (permission === 1021){this.inserttid = true};
        if (permission === 1022){this.deletetid = true};
        if (permission === 1023){this.updatetid = true};
        if (permission === 1024){this.view = true};
        if (permission === 1025){this.viewRM = true};
        if (permission === 1026){this.viewbranch = true};
        if (permission === 1027){this.viewall = true};
      });
    } else {
      console.log('No permissions data found.');
    };

    this.service.allTID().subscribe(
      ( data: any) => {

        this.originalTIDList=data.data;
        this.TIDList = this.originalTIDList
        console.log('Response successful!',data.data);
        this.collectionSize = data.data.length;
      },
      (error:any) => {
        console.error('API Error:', error);
      }
    );

    this.service.allBranches().subscribe(
      (responce:any)=>{
        this.branches=responce.data;
      },
      (error:any)=>{
        console.error(error);        
      }
    )
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
        this.service.deleteTID(id).subscribe(
              (response:any)=>{
                console.log(response.data);
                // window.location.reload();
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


  edit(id : any){
    this.router.navigate(['/set/tidgeneration/'+id]);
  }


applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.TIDList];
  this.TIDList = this.originalTIDList.filter((data) =>
  (data.courierId !== null && !isNaN(data.courierId) && data.courierId.toString().includes(searchString)) ||
  (data.dateOfGeneration !== null && !isNaN(data.dateOfGeneration) && data.dateOfGeneration.toString().includes(searchString)) ||
  (data.aofNo !== null && !isNaN(data.aofNo) && data.aofNo.toString().includes(searchString)) ||
  (data.customerId !== null && !isNaN(data.customerId) && data.customerId.toString().includes(searchString)) ||
   (data.masterEmpId !== null && !isNaN(data.masterEmpId) && data.masterEmpId.toString().includes(searchString)) ||

   (data.empId !== null && !isNaN(data.empId) && data.empId.toString().includes(searchString)) ||
   (data.branchId !== null && !isNaN(data.branchId) && data.branchId.toString().includes(searchString)) ||


    data.customerName.toLowerCase().includes(searchString) ||
    data.courierAdd.toLowerCase().includes(searchString) ||
    data.branchName.toLowerCase().includes(searchString) ||
   
    (data.tID !== null && !isNaN(data.tID) && data.tID.toString().includes(searchString)) 

   
    // status: any;
   
    
   
  );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

onSubmit(){
  console.log("DATA :::::: " ,this.tidForm.value);
  
  this.service.SearchTiddetails(this.tidForm.value).subscribe(
    (responce:any)=>{
      this.TIDList=responce.data;
      console.log('val',responce.data);
    },
    (error:any)=>{
      console.error(error);        
    }
  )
}
}
