import { Component } from '@angular/core';
import { ViewAddDailyvisitModel } from '../view-add-dailyvisit/view-add-dailyvisit.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchModel } from '../branch/branch.component.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css']
})
export class ViewBranchComponent {
  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: ViewAddDailyvisitModel[] = [];
  currentPage: number = 1;
  countries: ViewAddDailyvisitModel[] | undefined;
  collectionSize =100;
  viewbranchForm !: FormGroup;
  activeTab: string = 'tab1';
  branch: BranchModel = new BranchModel();
  id!:number;
 
  constructor(private formBuilder: FormBuilder, private apiService:ApiService,private route:ActivatedRoute, private router :  Router) {
    this.viewbranchForm = this.formBuilder.group({
      branchName: ['', Validators.required], // Add validation if needed
      branchClassification: ['', Validators.required], // Add validation if needed
      branchCode: ['', Validators.required], // Add validation if needed
      branchCity: ['', Validators.required], // Add validation if needed
      branchArea: ['', Validators.required], // Add validation if needed
      branchAddress: ['', Validators.required], // Add validation if needed
      latitude: ['', Validators.required], // Add validation if needed
      longitude: ['', Validators.required], // Add validation if needed
    });

  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.BranchById(this.id).subscribe(
      (response:any)=>{
        this.branch=response.data;
        this.viewbranchForm.patchValue({
          branchName:  response.data[0].branchName,
          branchClassification: response.data[0].branchClassification,
          branchCode: response.data[0].branchCode,
          branchCity: response.data[0].branchCity,
          branchArea: response.data[0].branchArea,
          branchAddress: response.data[0].branchAddress,
          latitude: response.data[0].latitude,
          longitude: response.data[0].longitude,
         })
      },
      (error:any)=>{console.error(error);}
    )
  }

  onSubmit(){
    let br = {branchId : this.id,
      branchName: this.branch.branchName,
      branchCity: this.branch.branchCity,
      branchCode: this.branch.branchCode,
      branchClassification: this.branch.branchClassification,
      branchArea: this.branch.branchArea,
      branchAddress: this.branch.branchAddress,
      latitude: this.branch.latitude,
      longitude: this.branch.longitude};
      this.apiService.updateBranch(br).subscribe(
      (response:any)=>{
        console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        // setInterval(()=>{window.location.reload()},1000);
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
        // setInterval(()=>{window.location.reload()},1000);
      }
    );
  }


  reset(){
    // window.location.reload();
    this.router.navigate([this.router.url]);

  }



applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  this.dataarray = filteredData.filter((data) =>
    data.branchname.toLowerCase().includes(searchString) ||
    data.branchcode.toLowerCase().includes(searchString) ||
    data.branchcity.toLowerCase().includes(searchString) ||
    data.branchaddress.toLowerCase().includes(searchString)
  );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}


changeTab(tabId: string) {
  this.activeTab = tabId;
}

switchTabBasedOnId(id: string) {
  if (id === 'tab1') {
    this.activeTab = 'tab1';
  } else if (id === 'tab2') {
    this.activeTab = 'tab2';
  }
}
}
