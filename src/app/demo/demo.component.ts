import { Component, ViewChild } from '@angular/core';
import { ConnectorModel, DataBinding, Diagram, DiagramComponent, DiagramTools, HierarchicalTree, LayoutModel, NodeModel, SnapConstraints, SnapSettingsModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  hierarchyData: string[][] = [];
  
  constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.apiService.gethierarchy().subscribe(
  //     (response: any) => {
  //       if (response.status) {
  //         this.hierarchyData = JSON.parse(response.data);
  //         this.initializeDiagram();
  //       } else {
  //         console.error('Error: API returned false status');
  //       }
  //     },
  //     (error: any) => {
  //       console.error('Error fetching hierarchy:', error);
  //     }
  //   );
  // }
ngOnInit() {

  this.apiService.gethierarchy().subscribe(
        (response: any) => {
          if (response.status) {
            console.log("gggggggggggg", response.data);
            
            this.hierarchyData = JSON.parse(response.data);
          } else {
            console.error('Error: API returned false status');
          }
        },
        (error: any) => {
          console.error('Error fetching hierarchy:', error);
        }
      );
     

}

@ViewChild('diagram')
public diagram: DiagramComponent | undefined;
   //Initializes data source.
   public data: object[] = [
     { id: 1, Label: 'Managing Director' },
     { id: 2, Label: 'DIRECTOR SALES & DISTRUBUTION', parentId: 1 },
     { id: 3, Label: 'DIRECTOR SUPPORT', parentId: 1 },
     { id: 4, Label: 'DIRECTOR CPU', parentId: 1 },
     { id: 5, Label: 'NATIONAL BUSINESS HEAD', parentId: 2},
     { id: 6, Label: 'NATIONAL SALES MANAGER', parentId: 2},
     { id: 7, Label: 'NATIONAL DIRECT SALES HEAD', parentId: 2},
     { id: 8, Label: 'NATIONAL ALTERNATE SALES HEAD', parentId: 2},
     { id: 9, Label: 'NATIONAL DSA SALES HEAD', parentId: 2},
     { id: 10, Label: 'CHIEF MARKETING OFFICER', parentId: 3},
     { id: 11, Label: 'CHIEF FINANCIAL OFFICER', parentId: 3},
     { id: 12, Label: 'CHIEF INFORMATION OFFICER', parentId: 3},
     { id: 13, Label: 'CHIEF COMPLIANCE OFFICER	', parentId: 3},
     { id: 14, Label: 'CHIEF HUMAN RESOURCES OFFICER', parentId: 3},
     { id: 15, Label: 'NATIONAL HEAD DVU', parentId: 4},
     { id: 16, Label: 'NATIONAL CAPITAL MANAGER', parentId: 4},
     { id: 17, Label: 'NATIONAL INVESTMENT ADVISER', parentId: 4},
     { id: 18, Label: 'NATIONAL BUSINESS ADVISER', parentId: 4},
     { id: 19, Label: 'NATIONAL FINANCIAL PLANNING MANAGER', parentId: 4},
     { id: 20, Label: 'NATIONAL ACCOUNTS MANAGER', parentId: 4},
     { id: 21, Label: 'NATIONAL COMPLIANCE MANAGER', parentId: 4},

     { id: 22, Label: 'ZONAL BUSINESS HEAD', parentId: 5},
     { id: 23, Label: 'ZONAL SALES MANAGER', parentId: 6},
     { id: 24, Label: 'ZONAL DIRECT SALES HEAD	', parentId: 7},
     { id: 25, Label: 'ZONAL ALTERNATE SALES HEAD', parentId: 8},
     { id: 26, Label: 'ZONAL DSA SALES HEAD', parentId: 9},

     { id: 27, Label: 'MARKETING MANAGER', parentId: 10 },
     { id: 28, Label: 'GENERAL MANAGER FINANCE', parentId: 11},
     { id: 29, Label: 'SENIOR INFORMATION SYSTEM MANAGER', parentId: 12},
     { id: 30, Label: 'SENIOR REGULATORY COMPLIANCE MANAGER', parentId: 13},
     { id: 31, Label: 'SENIOR MANAGER-QIG', parentId: 13},
     { id: 32, Label: 'SENIOR MANAGER HUMAN RESOURCES', parentId: 14},
     { id: 34, Label: 'SENIOR ADMINISTRATIVE MANAGER', parentId: 14},

     { id: 35, Label: 'ZONAL HEAD DVU	', parentId: 15 },
     { id: 36, Label: 'ZONAL CAPITAL MANAGER', parentId: 16},
     { id: 37, Label: 'ZONAL INVESTMENT ADVISER', parentId: 17},
     { id: 38, Label: 'ZONAL BUSINESS ADVISER', parentId: 18},
     { id: 39, Label: 'ZONAL FINANCIAL PLANNING MANAGER', parentId: 19},
     { id: 40, Label: 'ZONAL ACCOUNTS MANAGER', parentId: 20},
     { id: 41, Label: 'ZONAL COMPLIANCE MANAGER', parentId: 21},

     { id: 42, Label: 'REGIONAL BUSINESS HEAD', parentId: 22},
     { id: 43, Label: 'REGIONAL SALES MANAGER', parentId: 23},
     { id: 44, Label: 'REGIONAL DIRECT SALES HEAD', parentId: 24},
     { id: 45, Label: 'REGIONAL ALTERNATE SALES HEAD', parentId: 25},
     { id: 46, Label: 'REGIONAL DSA SALES HEAD', parentId: 26},

     { id: 47, Label: 'DEPUTY MARKETING MANAGER', parentId: 27},
     { id: 48, Label: 'DEPUTY GENERAL MANAGER FINANCE', parentId: 28},
     { id: 49, Label: 'INFORMATION SYSTEM MANAGER', parentId: 29},
     { id: 50, Label: 'REGULATORY RISK COMPLIANCE MANAGER', parentId: 30},
     { id: 51, Label: 'SERVICE QUALITY MANAGER-QIG', parentId: 31},
     { id: 52, Label: 'HR MANAGER', parentId: 32},
     { id: 53, Label: 'ADMINISTRATIVE MANAGER', parentId: 34},

     { id: 54, Label: 'REGIONAL HEAD DVU', parentId: 35},
     { id: 55, Label: 'REGIONAL CAPITAL MANAGER', parentId: 36},
     { id: 56, Label: 'REGIONAL INVESTMENT ADVISER', parentId: 37},
     { id: 57, Label: 'REGIONAL BUSINESS ADVISER', parentId: 38},
     { id: 58, Label: 'REGIONAL FINANCIAL PLANNING MANAGER', parentId: 39},
     { id: 59, Label: 'REGIONAL ACCOUNTS MANAGER', parentId: 40},
     { id: 60, Label: 'REGIONAL COMPLIANCE MANAGER' , parentId: 41},

     { id: 61, Label: 'AREA BUSINESS HEAD', parentId: 42},
     { id: 62, Label: 'AREA SALES MANAGER', parentId: 43},
     { id: 63, Label: 'AREA DIRECT SALES HEAD', parentId: 44},
     { id: 64, Label: 'AREA ALTERNATE SALES HEAD', parentId: 45},
     { id: 65, Label: 'AREA DSA SALES HEAD', parentId: 46},
     
     { id: 66, Label: 'ASSISTANT MARKETING MANAGER', parentId: 47},
     { id: 67, Label: 'FINANCE MANAGER' , parentId: 48},
     { id: 68, Label: 'DEPUTY INFORMATION SYSTEM MANAGER', parentId: 49},
     { id: 69, Label: 'DEPUTY REGULATORY COMPLIANCE MANAGER', parentId: 50},
     { id: 70, Label: 'DEPUTY SERVICE QUALITY MANAGER - QIG', parentId: 51},
     { id: 71, Label: 'DEPUTY MANAGER HR', parentId: 52},
     { id: 72, Label: 'DEPUTY ADMINISTRATIVE MANAGER', parentId: 53},

     { id: 73, Label: 'AREA MANAGER DVU', parentId: 54},
     { id: 74, Label: 'AREA CAPITAL MANAGER' , parentId: 55},
     { id: 75, Label: 'AREA INVESTMENT ADVISER', parentId: 56},
     { id: 76, Label: 'AREA BUSINESS ADVISER', parentId: 57},
     { id: 77, Label: 'AREA FINANCIAL PLANNING MANAGER', parentId: 58},
     { id: 78, Label: 'AREA ACCOUNT MANAGER', parentId: 59},
     { id: 79, Label: 'AREA COMPLIANCE MANAGER', parentId: 60},

     { id: 80, Label: 'BRANCH HEAD', parentId: 61},
     { id: 81, Label: 'BRANCH SALES MANAGER' , parentId: 62},
     { id: 82, Label: 'ACQUISITION MANAGER - DIRECT SALES', parentId: 63},
     { id: 83, Label: 'ALTERNATE SALES MANAGER', parentId: 64},
     { id: 84, Label: 'DSA RELATIONSHIP MANAGER', parentId: 65},

     { id: 85, Label: 'COLLECTION MANAGER-CAD', parentId: 66},
     { id: 86, Label: 'PAYMENTS MANAGER-PAD' , parentId: 66},
     { id: 87, Label: 'ASSISTANT INFORMATION SYSTEM MANAGER', parentId: 67},
     { id: 88, Label: 'ASSISTANT REGULATORY COMPLIANCE MANAGER', parentId: 68},
     { id: 89, Label: 'AREA FINANCIAL PLANNING MANAGER', parentId: 69},
     { id: 90, Label: 'ASSISTANT SERVICE QUALITY MANAGER', parentId: 70},
     { id: 91, Label: 'ASSISTANT HR', parentId: 71},
     { id: 92, Label: 'ASSISTANT ADMINISTRATIVE MANAGER', parentId: 72},

     { id: 93, Label: 'MANAGER DVU', parentId: 73},
     { id: 94, Label: 'CAPITAL MANAGER' , parentId: 74},
     { id: 95, Label: 'INVESTMENT ADVISER', parentId: 75},
     { id: 96, Label: 'BUSINESS ADVISER', parentId: 76},
     { id: 97, Label: 'FINANCIAL PLANNING MANAGER', parentId: 77},
     { id: 98, Label: 'ACCOUNTS MANAGER', parentId: 78},
     { id: 99, Label: 'COMPLIANCE MANAGER', parentId: 79},

     { id: 100, Label: 'BRANCH MANAGER ENTERPRISE PORTFOLIO RELATIONSHIP MANAGER', parentId: 80},
    { id: 101, Label: 'BRANCH RELATIONSHIP OFFICER', parentId: 81},
    { id: 102, Label: 'TEAM LEADER DIRECT SALES', parentId: 82},
    { id: 103, Label: 'ALTERNATE SALES DEVELOPMENT OFFICER', parentId: 83},
    { id: 104, Label: 'DSA SALES DEVELOPMENT OFFICER', parentId: 84},

    { id: 105, Label: 'MARKETING ASSOCIATE', parentId: 85},
    { id: 106, Label: 'DEPUTY COLLECTION MANAGER-CAD' , parentId: 86},
    { id: 107, Label: 'DEPUTY PAYMENTS MANAGER-PAD', parentId: 87},
    { id: 108, Label: 'ASSOCIATE INFORMATION SYSTEM', parentId: 88},
    { id: 109, Label: 'ASSOCIATE REGULATORY COMPLIANCE', parentId: 89},
    { id: 110, Label: 'SERVICE QUALITY ASSOCIATE', parentId: 90},
    { id: 111, Label: 'HR RECRUITER', parentId: 91},
    { id: 112, Label: 'ASSOCIATE ADMINISTRATIVE', parentId: 92},

    { id: 113, Label: 'DEPUTY MANAGER DVU', parentId: 93},
    { id: 114, Label: 'DEPUTY CAPITAL MANAGER' , parentId: 94},
    { id: 115, Label: 'DEPUTY INVESTMENT ADVISER', parentId: 95},
    { id: 116, Label: 'DEPUTY BUSINESS ADVISER', parentId: 96},
    { id: 117, Label: 'DEPUTY FINANCIAL PLANNING MANAGER', parentId: 97},
    { id: 118, Label: 'DEPUTY ACCOUNT MANAGER', parentId: 98},
    { id: 119, Label: 'DEPUTY COMPLIANCE MANAGER', parentId: 99},

    { id: 120, Label: 'BRANCH OPERATIONS MANAGER', parentId: 100},
    { id: 121, Label: 'SALES ASSOCIATE' , parentId: 101},
    { id: 122, Label: 'TELECALLER DIRECT SALES', parentId: 102},
    { id: 123, Label: 'DEPUTY BUSINESS ADVISER ASSOCIATE', parentId: 103},

    { id: 124, Label: 'MARKETING TRAINEE', parentId: 105},
    { id: 125, Label: 'ASSISTANT COLLECTION MANAGER-CAD' , parentId: 106},
    { id: 126, Label: 'ASSISTANT PAYMENTS MANAGER-PAD', parentId: 107},
    { id: 127, Label: 'TRAINEE INFORMATION SYSTEM', parentId: 108},
    { id: 128, Label: 'REGULATORY COMPLIANCE TRAINEE', parentId: 109},
    { id: 129, Label: 'SERVICE QUALITY TRAINEE' , parentId: 110},
    { id: 130, Label: 'HR TRAINEE', parentId: 111},
    { id: 131, Label: 'ADMINISTRATIVE TRAINEE', parentId: 112},

    { id: 132, Label: 'MARKETING TRAINEE ASSISTANT MANAGER - DVU', parentId: 113},
    { id: 133, Label: 'ASSISTANT CAPITAL MANAGER' , parentId: 114},
    { id: 134, Label: 'ASSISTANT INVESTMENT ADVISER', parentId: 115},
    { id: 135, Label: 'ASSISTANT BUSINESS ADVISER', parentId: 116},
    { id: 136, Label: 'ASSISTANT FINANCIAL PLANNING MANAGER', parentId: 117},
    { id: 137, Label: 'ACCOUNTS ASSISTANT' , parentId: 118},
    { id: 138, Label: 'COMPLIANCE ASSISTANT' , parentId: 119},

    { id: 139, Label: 'RM-MEDIUM PORTFOLIO RELATIONSHIP MANAGER' , parentId: 120},

    { id: 140, Label: 'TRAINEE DVU', parentId: 132},
    { id: 141, Label: 'CAPITAL MANAGER TRAINEE' , parentId: 133},
    { id: 142, Label: 'TRAINEE INVESTMENT ADVISER', parentId: 134},
    { id: 143, Label: 'TRAINEE BUSINESS ADVISER', parentId: 135},
    { id: 144, Label: 'FINANCIAL PLANNING TRAINEE', parentId: 136},
    { id: 145, Label: 'ACCOUNTS TRAINEE' , parentId: 137},
    { id: 146, Label: 'COMPLIANCE TRAINEE' , parentId: 138},

    { id: 147, Label: 'PRM-RISING PORTFOLIO RELATIONSHIP MANAGER' , parentId: 139},

    { id: 148, Label: 'ABM-STARTUP PORTFOLIO RELATIONSHIP MANAGER' , parentId: 147},

    { id: 149, Label: 'ACCOUNT ACTIVATION OFFICER' , parentId: 148},

    { id: 150, Label: 'COLLECTION OFFICER' , parentId: 149},

    { id: 151, Label: 'CUSTOMER SERVICE OFFICER' , parentId: 150},

   ];
public tools = DiagramTools.ZoomPan;
public items: DataManager = new DataManager(
  this.data as JSON[],
  new Query().take(7)
);
public dataSourceSettings: Object = {
  //sets the fields to bind
  id: 'id',
  parentId: 'parentId',
  dataSource: this.items,
  doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
    
    nodeModel.shape = {
      type: 'Text',
      content: (data as any).Label,
    };
  },
};
public snapSettings: SnapSettingsModel = {
  constraints: SnapConstraints.None,
};
public layout: Object = {
  type: 'HierarchicalTree',
  verticalSpacing: 30, 
  horizontalSpacing: 2,
      enableAnimation: true
};
public nodeDefaults(obj: NodeModel): NodeModel {
  if((obj.data as any).id === 1 ){
    obj.style = { fill: '#FFFFFF', strokeColor: 'none', color: '#004C8C' , fontSize : 13 ,   };
    
    obj.backgroundColor = '#3BB161'; 
    obj.height = 35 ;
  
    obj.addInfo = { src: 'assets/Logo.png', margin: { top: 5 } };
   }
 else if((obj.data as any).id === 2 ||(obj.data as any).id === 3 ||(obj.data as any).id === 4 ) {
  obj.style = { fill: '#FFFFFF', strokeColor: 'none', color: '#004C8C' , fontSize : 11 ,   };
 
  obj.backgroundColor = '#3BB161'; 
  obj.width = 100 ;
  obj.height = 35 ;
 }
 else if((obj.data as any).id === 100 )  {
  obj.style = { fill: '#FFFFFF', strokeColor: 'none', color: '#004C8C',fontSize : 10 ,  };
  obj.backgroundColor = '#3BB161';
  obj.width = 85;
   obj.height = 70 ;
}

 else {
    obj.style = { fill: '#FFFFFF', strokeColor: 'none', color: '#004C8C',fontSize : 10 ,  };
    obj.backgroundColor = '#3BB161';
    obj.width = 85;
     obj.height = 65 ;
 }

(obj.shape as any).margin = { left: 1, right: 1, bottom: 1, top: 1 };
return obj;
}

public connDefaults(
  connector: ConnectorModel,
  diagram: Diagram
): ConnectorModel {
  connector.type = 'Orthogonal';
  connector.style = { strokeWidth: 0.5, strokeColor: '#3BB161' };

  connector.targetDecorator = {
    shape: 'Arrow',
    width: 0, // Adjust the width of the arrowhead
      height: 0,
    style: {
      fill: '#3BB161', // Arrow color
      // strokeColor: '#3BB161',
      strokeWidth : 0 // Arrow border color
    },
  };
  return connector;
}
// public data: any[] = [
//   { id: 'root', name: 'Root', parentId: null },
//   { id: 'node1', name: 'Node 1', parentId: 'root' },
//   { id: 'node2', name: 'Node 2', parentId: 'root' },
// ];
}


// }
