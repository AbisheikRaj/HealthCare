import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add_Doctors } from '../add-doctors/Add-Doctors';
import { AdminServiceService } from '../Service/admin-service.service';

@Component({
  selector: 'app-list-of-doctors',
  templateUrl: './list-of-doctors.component.html',
  styleUrls: ['./list-of-doctors.component.css']
})
export class ListOfDoctorsComponent implements OnInit {

  doctor_name : string | undefined;
  hospital : string | undefined;
  shift_time : string | undefined;
  mobile_number : string | undefined;

  error_message_server : string | undefined;
  doctor : Add_Doctors | undefined;
  edit_email : string | undefined;
  message : string | undefined;
  notify : string | undefined;
  list_of_doctors : Add_Doctors[] = [];


  constructor(private admin_service : AdminServiceService, private router : Router) { 
    
  }


  ngOnInit(): void {
    this.message = "loading";
    this.admin_service.get_doctors().subscribe(data => {
      if (data) {
        this.message = "doctors";
        this.list_of_doctors = data;
      } else {
        this.message = "empty";
      }
    });
  }

  remove_doctor(doctor_email : any) {
    this.admin_service.remove_doctors(doctor_email).subscribe(data => {
      if (data === 'success') {
        this.router.navigate(["/admin_page/list_of_doctors"]);
      } else {
        this.notify = data;
      }
      
    });
  }

  show_edit(doctor_email : any) {
    this.edit_email = doctor_email;
    
  }

  close() {
    this.edit_email = '';
  }

  edit_doctor_details() {
    this.doctor = new Add_Doctors();
    this.doctor.doctor_name = this.doctor_name;
    this.doctor.hospital = this.hospital;
    this.doctor.email = this.edit_email;
    this.doctor.mobile_number = this.mobile_number;
    this.doctor.shift_time = this.shift_time;
    if (this.doctor.doctor_name && this.doctor.hospital && this.doctor.email && this.doctor.mobile_number && this.doctor.shift_time) {
      this.admin_service.edit_doctors(this.doctor).subscribe(data => {
        if (data === 'success') {
          console.log("sucess");
          window.location.reload();
        } else {
          console.log("failure");
          this.error_message_server = "Error Occurred";
        }
      });
    }
  }
}
