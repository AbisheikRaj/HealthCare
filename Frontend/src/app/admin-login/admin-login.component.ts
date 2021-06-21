import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalServiceService } from '../hospital-service.service';
import { Admin_Login } from './Admin_Login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  visible : boolean = false;
  admin_login_form : FormGroup = new FormGroup({});
  admin_login : Admin_Login = new Admin_Login();
  message : string | undefined;

  constructor(fb : FormBuilder, private service : HospitalServiceService, private route : Router) {
    this.admin_login_form = fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    });
  }

  get controls() {
    return this.admin_login_form.controls;
  }

  ngOnInit(): void {
    
    sessionStorage.clear();
  }

  admin_login_form_submit() {
    this.admin_login.username = this.admin_login_form.value["username"];
    this.admin_login.password = this.admin_login_form.value["password"];
    this.service.admin_get_service(this.admin_login).subscribe(data => {
      if (data === 'success') {
        sessionStorage.setItem("accept", "true");
        this.route.navigate(["/admin_page/list_of_doctors"]);
      } else {
        this.message = "Invalid Credential";
      }
      this.admin_login_form.reset();
    });
  }
}
