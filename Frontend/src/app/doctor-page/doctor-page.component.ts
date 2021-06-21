import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospital-service.service';
import { Patient_History } from '../main-page/Patient_History';
import { Shift_Details } from './Shift_Details';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  shift_details : Shift_Details = new Shift_Details();
  patient_history : Patient_History[] = [];
  data_details !: string;
  message_details : string | undefined;
  shift_time : string | undefined;
  date_of_visit : string | undefined;

  constructor(private patient_service : HospitalServiceService) { 
      
  }

  ngOnInit(): void {
    this.patient_service.get_patient_history().subscribe(data => {
      this.patient_history = data;
      console.log(data);
    });
  }

  accept_admit() {
    
  } 

  admin() {
    
  }

}
