import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Add_Doctors } from '../add-doctors/Add-Doctors';
import { Doctor_Login } from '../doctor-login/doctor_login';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http : HttpClient) { }

  get_doctors() : Observable<any> {
    return this.http.get("http://localhost:8080/get_doctors");
  }

  remove_doctors(email : string) : Observable<any> {
    console.log(email);
    return this.http.delete(`http://localhost:8080/delete_doctor?email=${email}`, {responseType : 'text'});
  }

  edit_doctors(doctors : Add_Doctors) : Observable<any> {
    return this.http.put(`http://localhost:8080/edit_doctors`, doctors, {responseType : 'text'});
  }

  get_doctor_credential(doctor : Doctor_Login) : Observable<any> {
    return this.http.post("http://localhost:8080/get_doctor_credential", doctor, {responseType : 'text'});
  }

  // send_shift_details() : Observable<any> {
  //   return this.http.post("http://localhost:8080/send_shift_details");
  // }
}
