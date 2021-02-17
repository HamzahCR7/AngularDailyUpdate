import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

Designation!:string;
Username!:string;
NoOfTeamMembers!:number;
TotalCostOfAllProjects!:number;
PendingTasks!:number;
ProjectCost!:number;
CurrentExpenditure!:number;
AvailableFunds!:number;
UpcomingProjects!:number


  ngOnInit(){
    this.Designation="Team Leader";
    this.Username="Hamzah Aslam";
    this.NoOfTeamMembers=89;
    this.TotalCostOfAllProjects=5687897;
    this.PendingTasks=44;
    this.UpcomingProjects=4;
    this.CurrentExpenditure=121112;
    this.AvailableFunds=45445;
    this.ProjectCost=788844;

  }

}
