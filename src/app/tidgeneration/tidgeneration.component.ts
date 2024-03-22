import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tidgenerationModel } from './tidgeneration.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tidgeneration',
  templateUrl: './tidgeneration.component.html',
  styleUrls: ['./tidgeneration.component.css']
})
export class TidgenerationComponent {
  complianceForm !: FormGroup;
  
  page = 1;
  pageSize = 10 ;
  dataarray: tidgenerationModel[] = [];
  currentPage: number = 1;
  countries: tidgenerationModel[] | undefined;
  collectionSize =100;
  activeTab: string = 'tab1';

  tidstatus : tidgenerationModel = new tidgenerationModel();

  id!:number;

  constructor(private formBuilder: FormBuilder ,  private apiservice:ApiService, private route: ActivatedRoute) {

    this.complianceForm = this.formBuilder.group({
      status: ['', Validators.required], // Add validation if needed
      courierId : ['', Validators.required],//Add validation if needed
    });
  }

  onSubmit(){
    this.id = this.route.snapshot.params['id'];
    
    this.tidstatus.tds=this.id;
    console.log(this.tidstatus);
    this.apiservice.updatestatus(this.tidstatus).subscribe(
      (response:any)=>{
        console.log(response.data);
        Swal.fire({
          title: "Record Updated!",
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


onSubmit1(){
  this.id = this.route.snapshot.params['id'];
  this.tidstatus.tds=this.id;
  this.apiservice.updatecourier(this.tidstatus).subscribe(
    (response:any)=>{
      console.log(response.data);
      Swal.fire({
        title: "Record Updated!",
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
