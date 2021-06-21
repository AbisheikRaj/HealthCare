package com.example.HealthCareManagement.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shift_allocation")
public class Shift_Allocation {

    @Id
    private String patient_email;

    private String shift_time;
    private String shift_date;

    public String getPatient_email() {
        return patient_email;
    }

    public void setPatient_email(String patient_email) {
        this.patient_email = patient_email;
    }

    public String getShift_time() {
        return shift_time;
    }

    public void setShift_time(String shift_time) {
        this.shift_time = shift_time;
    }

    public String getShift_date() {
        return shift_date;
    }

    public void setShift_date(String shift_date) {
        this.shift_date = shift_date;
    }

    @Override
    public String toString() {
        return "Shift_Allocation{" +
                "patient_email='" + patient_email + '\'' +
                ", shift_time='" + shift_time + '\'' +
                ", shift_date='" + shift_date + '\'' +
                '}';
    }
}
