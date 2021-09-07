import { Appointment } from './appointment';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }


generateappointment(date : Date ): Observable<Appointment>{

  return this.http.get<Appointment>(`http://localhost:9091/appointment/getappointmentbydate/${date}`);

}

}
