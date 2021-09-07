import { DoctorStatusComponent } from './doctor-status/doctor-status.component';
import { GeneratingreportComponent } from './generatingreport/generatingreport.component';
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrequestComponent } from './allrequest/allrequest.component';

const routes: Routes = [{path:'doctorstatus',component:DoctorStatusComponent},
{path:'generatingreport',component:GeneratingreportComponent},
{path:'appointment',component:AppointmentstatusComponent},
{path: 'appointment/allrequest',component:AllrequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
