import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation!: string;
  Username!: string;
  NoOfTeamMembers!: number;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  ProjectCost!: number;
  CurrentExpenditure!: number;
  AvailableFunds!: number;
  UpcomingProjects!: number;
  Clients!: string[];
  Projects!: string[];
  Years: number[] = [];
  TeamMembersSummary!: any[];
  TeamMembers!:any[]


  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "Hamzah Aslam";
    this.NoOfTeamMembers = 89;
    this.TotalCostOfAllProjects = 5687897;
    this.PendingTasks = 44;
    this.UpcomingProjects = 4;
    this.CurrentExpenditure = 121112;
    this.AvailableFunds = 45445;
    this.ProjectCost = 788844;
    this.Clients = ["Edify Tech", "Microsoft Inc", "Mindtree Ltd", "Wipro"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D", "Project E"];
    for (var i = 2021; i >= 2010; i--) {
      this.Years.push(i);
    };
    this.TeamMembersSummary = [{
        Region: "East",
        Members: 10,
        unavailable: 4
      },
      {
        Region: "West",
        Members: 20,
        unavailable: 6
      },
      {
        Region: "South",
        Members: 100,
        unavailable: 40
      },
      {
        Region: "North",
        Members: 30,
        unavailable: 6
      },


    ];
  this.TeamMembers=[
    {
      Region:'East',Members:[
        {Id:1,name:"Hamzah",status:'available'},
                {Id:2,name:"Aslam",status:'available'},
        {Id:3,name:"Ansari",status:'unavailable'},
        {Id:4,name:"Raza",status:'unavailable'},

      ]
    },
      {
      Region:'West',Members:[
        {Id:1,name:"Ronaldo",status:'available'},
                {Id:2,name:"Messi",status:'available'},
        {Id:3,name:"Neymar",status:'unavailable'},
        {Id:4,name:"Mbappe",status:'available'},

      ]
    },
      {
      Region:'South',Members:[
        {Id:1,name:"Sachin",status:'available'},
                {Id:2,name:"Kohli",status:'available'},
        {Id:3,name:"Ansari",status:'unavailable'},
        {Id:4,name:"Raza",status:'unavailable'},

      ]
    },
      {
      Region:'North',Members:[
        {Id:1,name:"Hamzah",status:'available'},
                {Id:2,name:"Aslam",status:'available'},
        {Id:3,name:"Ansari",status:'unavailable'},
        {Id:4,name:"Raza",status:'unavailable'},

      ]
    },

  ]

  }

}
