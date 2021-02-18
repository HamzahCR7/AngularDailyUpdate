import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {MyProfileComponent} from './my-profile/my-profile.component'
import {ContactUsComponent} from './contact-us/contact-us.component'
import {DashboardService} from '../dashboard.service'


@NgModule({
  declarations: [
      DashboardComponent,
    AboutComponent,
    ContactUsComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
     
  ],
  exports:[DashboardComponent,AboutComponent,ContactUsComponent,MyProfileComponent],
    providers:[DashboardService],

})
export class AdminModule { }
