import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentModel } from '../department/department.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})

export class AddDepartmentComponent {
  adddepartmentForm !: FormGroup;
  addmaindeptForm1 !: FormGroup;
  dataarray: any[] = [];
  allMaindeps=[{mainDepName:'',id:0}]
  department:DepartmentModel = new DepartmentModel();
  Mdep={mainDepName:''};

  constructor(private formBuilder: FormBuilder, private apiService:ApiService) {
    this.adddepartmentForm = this.formBuilder.group({
      mainDepId: ['', Validators.required], // Add validation if needed
      departmentName: ['', Validators.required], // Add validation if needed

    });  
  }

  ngOnInit(){
    this.apiService.allMainDepartments().subscribe(
      (res:any)=>{ this.allMaindeps = res.data;},
      (err:any)=>{ console.error(err)}
    )
  }


  onSubmit()
  {
    this.apiService.addDepartment(this.department).subscribe(
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


addMainDep(){
  console.log('Maindep ::::::: ',this.Mdep);  
  this.apiService.addMainDepartment(this.Mdep).subscribe(
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
