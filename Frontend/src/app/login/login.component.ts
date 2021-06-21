import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalServiceService } from '../hospital-service.service';
import { Login_User } from './Login_User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string | undefined;
  login_form : FormGroup = new FormGroup({});
  login_user : Login_User = new Login_User();
  
  constructor(fb : FormBuilder, private service : HospitalServiceService, private router : Router) {
    this.login_form = fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    });
  }

  get controls() {
    return this.login_form.controls;
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  login_form_submit() {
    this.login_user.email = this.login_form.value["email"];
    this.login_user.password = this.login_form.value["password"];
    localStorage.setItem("user", this.login_user.email || "");
    this.service.patient_get_service(this.login_user).subscribe(data => {
      if (data === 'success') {
        this.router.navigate(["/main_page"]);
      } else if (data === 'failure') {
        this.message = "Invalid Credential";
      } else {
        this.message = "Email ID is Invalid";
      }
    });

    this.login_form.reset();
  }
}
