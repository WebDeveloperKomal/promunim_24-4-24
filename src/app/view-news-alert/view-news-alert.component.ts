import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-news-alert',
  templateUrl: './view-news-alert.component.html',
  styleUrls: ['./view-news-alert.component.css']
})
export class ViewNewsAlertComponent {
  ViewNewsAlertForm !: FormGroup;
  dataarray: any[] = [];

  id!: number;
  updateAlert = {
    date: "",
    newsAlertId: 0,
    subject: "",
    description: ""
  }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private apiService: ApiService) {
    this.ViewNewsAlertForm = this.formBuilder.group({
      date: ['', Validators.required], // Add validation if needed
      subject: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required] ,// Add validation if needed
      newsAlertId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log('id :::: ',this.id);
    
  }

  onSubmit() {
    this.updateAlert.newsAlertId = this.id;
    console.log('replay send::::: ', this.updateAlert);
    this.apiService.updateNewsAlert(this.updateAlert).subscribe(
      (response: any) => {
        console.log(response);
        Swal.fire({
          title: "Record Updated!",
          icon: "success"
        });
        // window.location.reload();
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
    )
    // setInterval(()=>{window.location.reload()},1000);
  }

  reset(){
    // window.location.reload();
  }
}
