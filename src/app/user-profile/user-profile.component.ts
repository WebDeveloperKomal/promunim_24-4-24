import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employee/employee.component.model';
import { SecurityService } from '../security.service';
import { UserModel } from './userModel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  SearchText : any ;

  page = 1;
  pageSize = 10 ;
  dataarray: EmployeeModel[] = [];
  currentPage: number = 1;
  countries: EmployeeModel[] | undefined;
  collectionSize =100;
  employeeForm !: FormGroup;
  updateuserprofile !: FormGroup;
  user:UserModel = new UserModel();

  constructor(private formBuilder: FormBuilder, private service:SecurityService, private router:Router) {
    this.updateuserprofile = this.formBuilder.group({
      firstname: ['', Validators.required], // Add validation if needed
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      constno: ['', Validators.required],
      dob: ['', Validators.required]
     
    });
  }


  ngOnInit(){
    this.service.getUserData().subscribe(
      (response:any)=>{
        this.user = response.data;
      },
      (error:any)=>{
        console.error(error);
      }
    )
  }

  updateUserProfile(){
        console.log(this.user);
        this.service.updateUserProfile(this.user).subscribe(
        (response:any)=>{
          console.log(response);
          Swal.fire({
            title: "Profile Updated!",
            icon: "success"
          });
          // setInterval(()=>{window.location.reload()},1000);
        },
        (error:any)=>{
          alert("error!");
          console.error(error);
          Swal.fire({
            title: "Error!",
            text : "Profile not updated.",
            icon: "error"
          });
          // setInterval(()=>{window.location.reload()},1000);
        });        
      } 
      
      





applyFilter(): void {
  const searchString = this.SearchText.toLowerCase();
  const filteredData = [...this.dataarray];
  // this.dataarray = filteredData.filter((data) =>
  //   data.branchname.toLowerCase().includes(searchString) ||
  //   data.branchcode.toLowerCase().includes(searchString) ||
  //   data.branchcity.toLowerCase().includes(searchString) ||
  //   data.branchaddress.toLowerCase().includes(searchString)
  // );
}
refreshCountries() {
  this.countries = this.dataarray
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

delete(){
  confirm("Are you sure to delete this Photo")
}

}
