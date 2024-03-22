import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentModel } from '../department/department.component.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})

export class ViewDepartmentComponent {
  adddepartmentForm !: FormGroup;
  dataarray: any[] = [];
  allMaindeps=[{mainDepName:'',id:0}]
  dept:DepartmentModel = new DepartmentModel();
  id:any;

  constructor(private formBuilder: FormBuilder, private apiService:ApiService, private route:ActivatedRoute) {
    this.adddepartmentForm = this.formBuilder.group({
      selmaindepart: ['', Validators.required], // Add validation if needed
      department: ['', Validators.required], // Add validation if needed     
    });
  }



ngOnInit(){
  this.apiService.allMainDepartments().subscribe(
    (res:any)=>{ this.allMaindeps = res.data;},
    (err:any)=>{ console.error(err)}
  )
    this.id = this.route.snapshot.params['id'];
    this.apiService.DepartmentById(this.id).subscribe(
      (response:any)=>{
        this.dept=response.data;
        console.log('val',response.data  );
        console.log('val',response.data.depName  );
      this.adddepartmentForm.patchValue({
        departmentName: response.data[0].departmentName ,
        mainDepName:  response.data[0].depName 
      })
    },
      (error:any)=>{console.error(error);}
    )
  }
  reset(){
    // window.location.reload();
  }
  onSubmit(){
    let dep = {departmentID : this.id,
                departmentName: this.dept.departmentName,
                mainDepId: this.dept.mainDepId,};
    this.apiService.updateDepartment(dep).subscribe(
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




}
