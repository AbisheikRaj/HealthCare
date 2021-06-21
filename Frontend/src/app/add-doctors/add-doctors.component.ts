import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalServiceService } from '../hospital-service.service';
import { Add_Doctors } from './Add-Doctors';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {

  message : string | undefined;
  add_doctors_form : FormGroup = new FormGroup({});
  doctors : Add_Doctors = new Add_Doctors();

  constructor(fb : FormBuilder, private hospital_service : HospitalServiceService) { 
    this.add_doctors_form = fb.group({
      name : ["", Validators.required],
      email : ["", Validators.required],
      hospital : ["", Validators.required],
      mobile_number : ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      shift_time : ["", Validators.required],
      password : ["", Validators.required]
    });
  }

  get controls() {
    return this.add_doctors_form.controls;
  }

  ngOnInit(): void {
  }

  add_doctors() {
    this.doctors.email = this.add_doctors_form.value["email"];
    this.doctors.hospital = this.add_doctors_form.value["hospital"];
    this.doctors.doctor_name = this.add_doctors_form.value["name"];
    this.doctors.mobile_number = this.add_doctors_form.value["mobile_number"];
    this.doctors.shift_time =  this.add_doctors_form.value["shift_time"];
    this.doctors.password = this.add_doctors_form.value["password"];
    
    this.hospital_service.add_doctors(this.doctors).subscribe(data => {
      if (data === 'success') {
        this.message = "success";
      } else {
        this.message = "failure";
        console.log("failure");
      }
      this.add_doctors_form.reset();
      
    });

  }
}
