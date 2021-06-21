import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Add_Doctors } from './add-doctors/Add-Doctors';
import { Admin_Login } from './admin-login/Admin_Login';
import { Login_User } from './login/Login_User';
import { Patient_History } from './main-page/Patient_History';
import { Patient_Details } from './register/patient_details';

@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {

  constructor(private http : HttpClient) { 

  }

  patient_store_service(patient_details : Patient_Details) : Observable<any> {
    return this.http.post("http://localhost:8080/storeData", patient_details, {responseType : 'text'})
  }

  patient_get_service(patient_details : Login_User) : Observable<any> {
    return this.http.post("http://localhost:8080/getData", patient_details, {responseType : 'text'});
  }

  admin_get_service(admin_details : Admin_Login) : Observable<any> {
    return this.http.post("http://localhost:8080/get_admin", admin_details, {responseType: 'text'});
  }

  add_doctors(add_doctors : Add_Doctors) : Observable<any> {
    return this.http.post("http://localhost:8080/add_doctors", add_doctors, {responseType : 'text'});
  }

  get_patient_details(email : string) : Observable<any> {
    return this.http.post("http://localhost:8080/get_patient_details", email);
  }

  send_patient_details(patient : Patient_History) : Observable<any> {
    return this.http.post(`http://localhost:8080/send_patient_details`, patient, {responseType : 'text'});
  }

  get_patient_history() : Observable<any> {
    return this.http.get("http://localhost:8080/get_appointed_patient");
  }
}
