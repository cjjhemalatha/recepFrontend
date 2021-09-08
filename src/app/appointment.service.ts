import { Prescription } from './Prescription';
import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DaywiseData } from './DaywiseData';
import { AppointmentCancel } from './AppointmentCancel';
import { LeaveStatus } from './LeaveStatus';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  getAppointments: Appointment | any;
  constructor(private http:HttpClient) { }


generateappointment(date : Date ): Observable<Appointment>{

  return this.http.get<Appointment>(`http://localhost:9091/appointment/getappointmentbydate/?date=${date}`);

}

generateReport(date : any): Observable<DaywiseData>{
  return this.http.post<DaywiseData>("http://localhost:9091/receptionistController/gettotalNumbers",date);
 }


cancelappointment(pid : number,appointmentObj: AppointmentCancel):  Observable<Appointment>{
  this.getAppointments=this.http.post<Appointment>(`http://localhost:9091/receptionistController/cancelAppointment/${pid}`,appointmentObj);
  return this.getAppointments;
}

doctorStatus(): Observable<LeaveStatus>{
  return this.http.get<LeaveStatus>("http://localhost:9091/doctorController/getallLeaves");
}

confirmappointment(pid : number,appointmentObj: AppointmentCancel): Observable<Appointment>{
this.getAppointments=this.http.post<Appointment>(`http://localhost:9091/receptionistController/confirmAppointment/${pid}`,appointmentObj);
return this.getAppointments;
}

goingin(pid : number,appointmentObj: AppointmentCancel): Observable<Appointment>{
  this.getAppointments=this.http.post<Appointment>(`http://localhost:9091/receptionistController/consultingnow/${pid}`,appointmentObj);
  return this.getAppointments;
}

confirmleave(leaveObj: LeaveStatus){
  this.http.post(`http://localhost:9091/receptionistController/cancelforoneDoctor`,leaveObj).subscribe();
}

generatePrescription(appointmentObj: AppointmentCancel): Observable<Prescription>{
  return this.http.post<Prescription>("http://localhost:9091/getPrescriptionsByAppId",appointmentObj);
}

}

