import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouriorModel } from '../add-courier/couriorModel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-courier',
  templateUrl: './view-courier.component.html',
  styleUrls: ['./view-courier.component.css']
})
export class ViewCourierComponent {
  ViewCourierForm !: FormGroup
  dataarray: any[] = [];
  courior:CouriorModel = new CouriorModel();
  id:any;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.ViewCourierForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required], 
      phoneNo: ['', Validators.required] ,
      fax: ['', Validators.required] ,
      emailId: ['', Validators.required] ,    
    });
  }


  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apiService.couriorById(this.id).subscribe(
    (res:any)=>{
      console.log(res);
      this.courior= res;
    },
    (err:any)=>{console.error(err);}
    )
  }

  reset(){
    // window.location.reload();
  }
  onSubmit(){
    this.apiService.updateCourior(this.courior).subscribe(
      (res:any)=>{
        console.log(res.data);
        Swal.fire({
          title: "Record Updated!",
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


}
