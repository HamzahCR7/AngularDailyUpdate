import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary():any[]
  {
var TeamMembersSummary=[
    {
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
]
return TeamMembersSummary;
  }
}
