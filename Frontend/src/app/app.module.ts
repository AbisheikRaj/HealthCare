import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDoctorsComponent } from './add-doctors/add-doctors.component';
import { AvailableDoctorsComponent } from './available-doctors/available-doctors.component';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminPageComponent,
    DoctorLoginComponent,
    DoctorPageComponent,
    MainPageComponent,
    NavbarComponent,
    AddDoctorsComponent,
    AvailableDoctorsComponent,
    ListOfDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
