import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './admin/dashboard/dashboard.component'
import {AboutComponent} from './admin/about/about.component'
import {ContactUsComponent} from './admin/contact-us/contact-us.component'
import {ProjectsComponent} from './admin/projects/projects.component'


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
   {path:"about",component:AboutComponent},
   {path:"contact-us",component:ContactUsComponent},
   {path:"project",component:ProjectsComponent},
   {path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
