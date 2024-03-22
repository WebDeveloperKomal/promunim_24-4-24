import { Component } from '@angular/core';
import { ViewTechSupportModel } from './view-techsupport.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { TechSupportModel } from '../tech-support/tech-support.component.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-techsupport',
  templateUrl: './view-techsupport.component.html',
  styleUrls: ['./view-techsupport.component.css']
})
export class ViewTechsupportComponent {
  techSupport !: FormGroup;

  viewtechSupport:TechSupportModel[] = [];
  replay : ViewTechSupportModel = new ViewTechSupportModel();
  data1={
    date: "",
    subject: "",
    insertBy: "",
    ticketId: 0
  };
  data2=[{
    date: "",
    replyById: 0,
    replyId: 0,
    reply: "",
    replyBy: "",
    ticketId: 0
  }];
  empId:any;
 
  id!:number;

  constructor(private formBuilder: FormBuilder ,private apiService : ApiService, private route:ActivatedRoute) {
    this.techSupport = this.formBuilder.group({
      date: ['', Validators.required], // Add validation if needed 
      subject: ['', Validators.required], // Add validation if needed
      insertBy: ['', Validators.required], // Add validation if needed
      ticketId: ['', Validators.required], // Add validation if needed
      reply: ['', Validators.required], // Add validation if needed
    });
}

ngOnInit(){
  this.id = this.route.snapshot.params['id'];  
  this.apiService.allreplayByID(this.id).subscribe(
    ( data: any) => {
      this.data1=data.data1;
      this.data2=data.data2;
      console.log('Response successful!');
    },
    (error:any) => {
      console.error('API Error:', error);
    }
  );
}

onSubmit(){ 
  this.replay.ticketId=this.id;
  this.apiService.addreplay(this.replay).subscribe(
    (response:any)=>{
      console.log(response.status);
      Swal.fire({
        title: "Record Added!",
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


applyFilter(): void {
  // const searchString = this.SearchText.toLowerCase();
  // const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  // this.countries = this.dataarray
  //   .map((country, i) => ({id: i + 1, ...country}))
  //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
