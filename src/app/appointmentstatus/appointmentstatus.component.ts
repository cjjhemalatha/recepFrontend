import { AppointmentService } from './../appointment.service';
import { Appointment } from './../appointment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmentstatus',
  templateUrl: './appointmentstatus.component.html',
  styleUrls: ['./appointmentstatus.component.css']
})
export class AppointmentstatusComponent implements OnInit {

  value: any;

  date1: any;
  datedate: any;
  appointmentObj: Appointment | any;
  
  headers=["Application Id","Application Date","Purpose","Availability","Doctor Id","Patient Id","Confirm","Cancel","Generate Prescription"];

  

  
  constructor(private router:Router, private appservice:AppointmentService

    ) { }
    

  ngOnInit(): void {
    this.datedate={"appointmentDate":this.date1};
    // this.appointmentObj.applicationDate=this.date1;
    console.log(this.date1);
    // let resp=this.http.post("http://localhost:9091/appointment/getappointmentbydate", this.appointmentObj );
    // resp.subscribe((data)=>console.log(data))
    // resp.subscribe((data)=>this.value=data)
  }

  allrequest(){
    this.router.navigate(['/appointment/allrequest'])
  }
  
  allrequests(date1: any){
    this.datedate={"appointmentDate":this.date1};
    const date=this.date1;
    // this.router.navigate(['/appointment/allrequest'])
    console.log(date1);
    const resp=this.appservice.generateappointment(date)
    resp.subscribe((data)=>{console.log(data) 
    this.value=data})
   

  }
  

  confirmAppointment(cappointment : any, pid:number){
    console.log(pid);
    console.log(cappointment);

    
    // let res=this.http.post("http://localhost:9091/receptionistController/confirmAppointment/"+pid,cappointment);
    // res.subscribe((data)=>console.log(data))
    // res.subscribe((data)=>this.value=data)
    
    
    // setTimeout(function(){this.allrequests(this.date1);},5000);
  }
  cancelAppointment(cappointment: any){
    // let res=this.http.post("http://localhost:9091/receptionistController/cancelAllAppointments/",cappointment);
  }

  generatepriscription(){
    
  }


  // gotodetails(bokid:number){
  //   this.router.navigate(['allbook/abook/', bokid]);
  // }


}
