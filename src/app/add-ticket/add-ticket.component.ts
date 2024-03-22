import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddTicketModel } from './add-ticket.component.model';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  SearchText : any ;
 
  page = 1;
  pageSize = 10 ;
  dataarray: AddTicketModel[] = [];
  currentPage: number = 1;
  countries: AddTicketModel[] | undefined;
  collectionSize =100;
  addTicket !: FormGroup;


newTicket: AddTicketModel = new AddTicketModel();

  constructor(private formBuilder: FormBuilder,private apiService: ApiService) {

    this.addTicket = this.formBuilder.group({
      ticketTo: ['', Validators.required], // Add validation if needed
      subject: ['', Validators.required], // Add validation if needed
      description: ['', Validators.required] // Add validation if needed
    });
  
}

onSubmit(){  
  this.apiService.addTickets(this.newTicket).subscribe(
    (response:any)=>{
      console.log(response);
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
