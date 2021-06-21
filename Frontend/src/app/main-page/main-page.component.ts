import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add_Doctors } from '../add-doctors/Add-Doctors';
import { HospitalServiceService } from '../hospital-service.service';
import { AdminServiceService } from '../Service/admin-service.service';
import * as $ from 'jquery';
import { Patient_History } from './Patient_History';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  Patient_details !: Patient_History;
  notify_message : string | undefined;
  patient : any;
  demo : string = "hello";
  message : string | undefined;
  list_of_doctors : Add_Doctors[] = [];
  constructor(private admin_service : AdminServiceService, private router : Router, private patient_service : HospitalServiceService) {}

  ngOnInit(): void {
    if (!localStorage.getItem("user")) {
      this.router.navigate([""]);
    } else {
      this.admin_service.get_doctors().subscribe(data => {
        if (data) {
          this.list_of_doctors = data;
        } else {
          this.message = "failure";
        }
      });
    }
  }

  async appointment(email_ID : any) {

    const email = localStorage.getItem("user") || "";
    await this.patient_service.get_patient_details(email).toPromise().then(data => {
      this.patient = data;
    });

    this.Patient_details = new Patient_History();
    this.Patient_details.patient_name = this.patient.name;
    this.Patient_details.doctor_email = email_ID;
    this.Patient_details.patient_age = this.patient.age;
    this.Patient_details.patient_gender = this.patient.gender;
    this.Patient_details.patient_mobile_no = this.patient.mobile_number;

    $(function() {
      setTimeout(function() {
        $(".notify_message").fadeOut('slow')
      }, 3000)
    });
    
    await this.patient_service.send_patient_details(this.Patient_details).subscribe(data => {
      if (data === 'success') {
        this.notify_message = "success";
      } else {
        this.notify_message = "failure";
      }
     });
  }

  logout() {
    localStorage.clear();
    this.router.navigate([""]);
  }
  


}
