import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserModel } from '../user-profile/userModel';
import { AuthiServiceService } from '../authi-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;
  credentials={email:'',password:''};

  constructor(private service:SecurityService, private router:Router, private serv : AuthiServiceService){}

  ngOnInit(){
  }

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }
  
  onSubmit(){
    this.service.Login(this.credentials).subscribe(
      (response :any) => 
      {
        localStorage.setItem('token',response.jwtToken);
        // localStorage.setItem('loginStatus','1');
        // localStorage.setItem('token',response.jwtToken);
        // localStorage.setItem('token',response.jwtToken);
        // this.serv.isauthenticated = true;
        this.router.navigate(["set/"]); 
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        }); 
      },
      error => {console.error(error);
        Swal.fire({
          title: "Invalid Credentials!",
          text: "Please Enter Valid username and password.",
          icon: "error"
        });
      }
    );
    
  }
}





















// showPassword: boolean = false;
// credentials={email:'',password:''};

// constructor(private formBuilder: FormBuilder,private service:SecurityService) {


// }

// togglePasswordVisibility() {
// this.showPassword = !this.showPassword;
// }

// ngOnInit(){
// }

// onSubmit(){
// this.service.Login(this.credentials).subscribe(
// (response :any) =>
// {
// localStorage.setItem('token',response.jwtToken);
// window.location.href="/set/";
// },
// error => {console.error(error);
// // alert('Please Enter Valid Credential')
// // Swal.fire('Please Enter Valid Credential')
// }
// )
// }