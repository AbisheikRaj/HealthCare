import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalServiceService } from '../hospital-service.service';
import { MustMatch } from './checkPassword.validator';
import { Patient_Details } from './patient_details';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message_details : string | undefined;
  accept : boolean = false;
  register_form : FormGroup = new FormGroup({});
  patient : Patient_Details = new Patient_Details();

  constructor(fb : FormBuilder, private patientService : HospitalServiceService) { 
    this.register_form = fb.group({
      email : ["", [Validators.required, Validators.email]],
      name : ["", [Validators.required, Validators.pattern("^[a-z A-Z]*$")]],
      password : ["", [Validators.required, Validators.minLength(6)]],
      confirm_password : ["", [Validators.required, Validators.minLength(6)]],
      gender : ["", Validators.required],
      age : ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      address : ["", Validators.required],
      mobile_number : ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]]
    }, {
      validator : MustMatch('password', 'confirm_password')
    });
  }

  get controls() {
    return this.register_form.controls;
  }

  ngOnInit(): void {
  }

  register_form_submit() {
    this.patient.name = this.register_form.value["name"];
    this.patient.email = this.register_form.value["email"];
    this.patient.age = this.register_form.value["age"];
    this.patient.password = this.register_form.value["password"];
    this.patient.gender = this.register_form.value["gender"];
    this.patient.address = this.register_form.value["address"];
    this.patient.mobile_number = this.register_form.value["mobile_number"];
    
    this.patientService.patient_store_service(this.patient).subscribe(data => {
      if (data === 'success') {
        this.message_details = data;
        this.register_form.reset();
      } else {
        this.message_details = data;
      }
    });
    
  }

}
