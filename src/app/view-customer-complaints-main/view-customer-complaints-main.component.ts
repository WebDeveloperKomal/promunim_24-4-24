import { Component } from '@angular/core';
import { ViewCustCOmplMainModel } from './view-customer-complaints-main.component.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer-complaints-main',
  templateUrl: './view-customer-complaints-main.component.html',
  styleUrls: ['./view-customer-complaints-main.component.css']
})
export class ViewCustomerComplaintsMainComponent {
  complianceForm !: FormGroup;


  page = 1;
  pageSize = 10;
  dataarray: ViewCustCOmplMainModel[] = [];
  currentPage: number = 1;
  countries: ViewCustCOmplMainModel[] | undefined;
  collectionSize = 100;

  data1 = {
    date: "",
    complaintId: 0,
    subject: "",
    accountNo: 0,
    companyName: "",
    insertDate: "",
    ticketId: "",
    insertByName: "",
    status: 0
  };
  data2 = [{
    date: "",
    complaintId: 0,
    replyId: 0,
    replyBy_mname:"" ,
    replyBy_lname:"" ,
    reply: "",
    replyBy: "",
    replyBy_fname: ""
  }];

  id!: number;
  replay: ViewCustCOmplMainModel = new ViewCustCOmplMainModel();

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private route: ActivatedRoute) {
    this.complianceForm = this.formBuilder.group({
      reply: ['', Validators.required], // Add validation if needed
      complaintId: ['', Validators.required], // Add validation if needed
      status:['' , Validators.required],
    });
  }


  ngOnInit() {
    this.id = this.route.snapshot.params['id']   //Get Id logic
    console.log(this.id);

    this.apiService.replayByID(this.id).subscribe(
      (data: any) => {
        this.data1 = data.data1;
        this.data2 = data.data2;
        console.log('Response successful!');
        console.log(this.data1);
        console.log(this.data2);
      },
      (error: any) => {
        console.error('API Error:', error);
      }
    );
  }

  onSubmit1(){
    // this.id = this.route.snapshot.params['id'];
    this.replay.complaintId = this.id;
    this.apiService.changestatus(this.replay).subscribe(
      (response:any)=>{
        console.log(response);
        window.location.reload();
      },
      (error:any)=>{
        console.error(error);        
      }
    )
  }

  onSubmit() {
    this.replay.complaintId = this.id;
    console.log('replay send::::: ', this.replay);
    this.apiService.replay(this.replay).subscribe(
      (response: any) => {
        console.log(response.data);
        window.location.reload();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }
}
