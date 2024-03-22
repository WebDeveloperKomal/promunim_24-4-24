import { Component, ViewChild } from '@angular/core';
import { TaskAppointmentModel } from './task-appointment.component.model';
import { FormGroup } from '@angular/forms';
import { ActionEventArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import{L10n} from '@syncfusion/ej2-base'
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { data } from 'jquery';

L10n.load({
  'en-US' : {
    'schedule' : {
      'saveButton' : '' ,
      'cancelButton' : '',
      'newEvent' : 'Add Task'
    }
  }
})
@Component({
  selector: 'app-task-appointment',
  templateUrl: './task-appointment.component.html',
  styleUrls: ['./task-appointment.component.css']
})
export class TaskAppointmentComponent {
dateparser(arg0: any) {
throw new Error('Method not implemented.');
}
  public tasks: TaskAppointmentModel[] = [];
  // public eventSettings: EventSettingsModel = {};
  // public dataManager: DataManager = new DataManager();

  
  private dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    // url: 'http://localhost:8181/auth/get-employee-tasks',
    // adaptor: new ODataV4Adaptor,
    // crossDomain: true ,
    // credentials: 'include'
 });



 
 public eventSettings: EventSettingsModel = { 
  dataSource: this.dataManager , 
  // fields : { subject : {'title'} ,

  //  }  // fields :{
  //   subject : {name:'title' , default : 'Hello ENvironment' , title : 'Enter Title' } ,
  //   startTime : {name : 'startTime'},
  //   endTime : {name : 'endTime'}
  //     }

  // allowAdding: true,
  // eventTemplate: this.eventTemplate.bind(this)
  

};
newevent : TaskAppointmentModel = new TaskAppointmentModel() ;
  
public setViews : View[] = ["Day" , "Week" , "Month", "Year"] ;
public showQuickInfo: Boolean = false;
// eventSettings: { dataSource: Object[] } = { dataSource: [] };

// private dataManager: DataManager = new DataManager({
//   url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
//   adaptor: new ODataV4Adaptor,
//   crossDomain: true
// });

constructor(private apiservice : ApiService) {}
ngOnInit(){
  
 this.fetchScheduleData() ;

// console.log('rrrrrrrrrrrr' , this.dataManager);

}


// fetchScheduleData(){
//   this.apiservice.getTask().subscribe((resp : any)=>
//   {
//     console.log('Tasks retrieved successfully', resp.data);
    
//     this.tasks = resp.data ;
    
//     this.dataManager = resp.data    
//     console.log('Tasks retrieved successfully sssssssssss', this.tasks);
   
//   }, (error: any) =>{
//     console.log('Error retrieving tasks', error);
    
//   }
//   )
// }
addTask(): void {
  console.log("data", this.newevent)
  this.apiservice.addTask(this.newevent).subscribe((resp: any)=>{
    console.log(resp.data);
        // Swal.fire({
        //   title: "Task Added !",
        //   icon: "success"
        // }); 

        setTimeout(() => {
          // Close the popup
          // this.isPopupOpen = false; // Assuming you have a variable to control the popup's visibility
          Swal.fire({
            title: "Task Added !",
            icon: "success"
          });
        }, 0);
        this.fetchScheduleData() ;
      },
      (error:any)=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          icon: "error"
        });
      }
  
  
  )
} 

fetchScheduleData() {
  this.apiservice.getTask().subscribe(
    (resp: any) => {
      console.log('Tasks retrieved successfully', resp.data);

      // Map the API response to the Syncfusion Scheduler format
      const mappedData = resp.data.map((item: { id: any; title: any; startTime: string | number | Date; endTime: string | number | Date; allDay: any; }) => ({
        Id: item.id,
        Subject: item.title,
        StartTime: new Date(item.startTime),
        EndTime: new Date(item.endTime),
        IsAllDay: item.allDay,
        // Add other required fields as needed
      }));
      console.log('Mapped Data', mappedData);
      

      // Assign the mapped data to the DataManager instance
      // this.dataManager = new DataManager({
      //   json: mappedData,
      //   adaptor: new ODataV4Adaptor(), 
       
      // });

      // Assign the DataManager to the eventSettings
      // this.eventSettings = { dataSource: this.dataManager };
      // console.log('dataManagerData',this.dataManager);
      
    },
    (error: any) => {
      console.log('Error retrieving tasks', error);
    }
  );
}


// public eventSettings: EventSettingsModel = { dataSource: this.tasks ,allowAdding: true };


// @ViewChild('schedule') public scheduleObj: any;

// public data: Record<string, any>[] = [];

// public fields: Record<string, any> = { dataSource: this.data };

// public editorTemplate: string = '<div class="custom-event-editor">' +
//   '<div class="form-group">' +
//   '<label for="description">Description</label>' +
//   '<input type="text" id="description" name="description" [(ngModel)]="newevent.description" class="e-field e-input">' +
//   '</div>' + 
//   '<div class="form-group">' +
//   '<label for="employeeId">Employee ID</label>' +
//   '<input type="number" id="employeeId" name="employeeId" [(ngModel)]="newevent.employeeId" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="taskDate">Task Date</label>' +
//   '<input type="date" id="taskDate" name="taskDate" [(ngModel)]="newevent.taskDate" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +  
//   '<label for="dueDate">Due Date</label>' +
//   '<input type="date" id="dueDate" name="dueDate" [(ngModel)]="newevent.dueDate" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<label for="type">Type</label>' +
//   '<input type="text" id="type" name="type" [(ngModel)]="newevent.type" class="e-field e-input">' +
//   '</div>' +
//   '<div class="form-group">' +
//   '<button type="submit" class="e-btn"  (click)="addTask()" >Save</button>' +
//   '<button type="reset" class="e-btn">Cancel</button>' +
//   '</div>' +
//   '</div>';


// public eventSettings: EventSettingsModel = { dataSource: this.data };






// onActionComplete(args: ActionEventArgs): void {
//   if (args.requestType === 'eventCreated' && Array.isArray(args.data)) {
//   console.log('response*******' , args.data[0]);
  
//     const newTask = args.data[0]; 
//     this.addTask(newTask);
//   }
  
// }

// onActionBegin(args: any): void {
//   if (args.requestType === 'eventCreate') {
   
//   console.log('Task data before API call:', this.newevent);
//   console.log('Task data before API call: des', this.newevent.description);
//   console.log('Task data before API call:emp', this.newevent.employeeId);
//   console.log('Task data before API call: dd', this.newevent.dueDate);

//   console.log('Task data before API call:td', this.newevent.taskDate);

//   console.log('Task data before API call:t', this.newevent.type);

//   this.apiservice.addTask(this.newevent).subscribe(
//     (resp: any) => {
//       console.log('Task added successfully', resp);
//     },
//     (error: any) => {
//       console.error('Error adding task', error);
//     }
//   );
//   }
// }


}
