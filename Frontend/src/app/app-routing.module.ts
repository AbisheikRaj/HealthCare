import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AvailableDoctorsComponent } from './available-doctors/available-doctors.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "register", component : RegisterComponent
  },
  {
    path : "", component : LoginComponent
  },
  {
    path : "main_page", component : MainPageComponent
  },
  {
    path : "doctor_login", component : DoctorLoginComponent
  },
  {
    path : "admin_login", component : AdminLoginComponent
  },
  {
    path : "doctor_page", component : DoctorPageComponent
  },
  {
    path : "admin_page", component : AdminPageComponent, children : [
      {
        path : "list_of_doctors", component : ListOfDoctorsComponent
      },
      {
        path : "add_doctors", component : AddDoctorsComponent
      },
      {
        path : "available_doctors", component : AvailableDoctorsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
