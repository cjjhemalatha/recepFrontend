import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorStatusComponent } from './doctor-status/doctor-status.component';
import { GeneratingreportComponent } from './generatingreport/generatingreport.component';
import { AppointmentstatusComponent } from './appointmentstatus/appointmentstatus.component';
import { AllrequestComponent } from './allrequest/allrequest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetdaterequestComponent } from './getdaterequest/getdaterequest.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorStatusComponent,
    GeneratingreportComponent,
    AppointmentstatusComponent,
    AllrequestComponent,
    GetdaterequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
