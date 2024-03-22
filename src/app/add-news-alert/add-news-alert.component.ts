import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NewsalertModel } from '../news-alert/news-alert.component.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news-alert',
  templateUrl: './add-news-alert.component.html',
  styleUrls: ['./add-news-alert.component.css']
})
export class AddNewsAlertComponent {
 
  AddNewsalertForm !: FormGroup;
  dataarray: any[] = [];
  NewsAlert: NewsalertModel = new NewsalertModel();

  constructor(private formBuilder: FormBuilder ,private apiService: ApiService, private router:Router) {

    this.AddNewsalertForm = this.formBuilder.group({
      date: ['', Validators.required], // Add validation if needed
      subject: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required] // Add validation if needed
    });
  }



onSubmit()
{
  this.apiService.addNewsAlert(this.NewsAlert).subscribe(
    (response:any)=>{
      console.log(response.status);  
      Swal.fire({
        title: "Record Saved!",
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
  )
  // setInterval(()=>{window.location.reload()},1000);        
}











}


