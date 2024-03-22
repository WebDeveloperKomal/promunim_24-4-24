import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouriorModel } from './couriorModel';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-courier',
  templateUrl: './add-courier.component.html',
  styleUrls: ['./add-courier.component.css']
})
export class AddCourierComponent {
  AddCourierForm !: FormGroup;
  dataarray: any[] = [];
  courior:CouriorModel = new CouriorModel();

  constructor(private formBuilder: FormBuilder,private apiService:ApiService) {
      this.AddCourierForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required], 
      phoneNo: ['', Validators.required] ,
      fax: ['', Validators.required] ,
      emailId: ['', Validators.required] ,    
    });
  }


  onSumbit(){
    console.log(this.courior);      
    this.apiService.addCourior(this.courior).subscribe(
    (res:any)=>{
      console.log(res.data); 
      Swal.fire({
        title: "Record Saved!",
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
