import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../Service/admin-service.service';
import { Doctor_Login } from './doctor_login';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  message : string | undefined;
  doctor_login_form : FormGroup = new FormGroup({});

  doctor_login : Doctor_Login = new Doctor_Login();

  constructor(fb : FormBuilder, private admin_service : AdminServiceService, private route : Router) { 
    this.doctor_login_form = fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    });
  }

  get controls() {
    return this.doctor_login_form.controls;
  }

  ngOnInit(): void {
  }

  doctor_login_form_submit() {
    this.doctor_login.username = this.doctor_login_form.value["username"];
    this.doctor_login.password = this.doctor_login_form.value["password"];
    this.admin_service.get_doctor_credential(this.doctor_login).subscribe(data => {
      console.log(data);
      if (data === 'success') {
        this.route.navigate(["/doctor_page"]);
      } else {
        this.message = "failure";
      }
    });
  }

}
