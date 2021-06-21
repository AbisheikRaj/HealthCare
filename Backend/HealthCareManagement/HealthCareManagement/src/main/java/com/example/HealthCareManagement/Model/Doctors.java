package com.example.HealthCareManagement.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctors")
public class Doctors {

    private String doctor_name;

    @Id
    private String email;
    
    private String hospital;
    private String mobile_number;
    private String shift_time;
    private String password;

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    public String getShift_time() {
        return shift_time;
    }

    public void setShift_time(String shift_time) {
        this.shift_time = shift_time;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Doctors{" +
                "doctor_name='" + doctor_name + '\'' +
                ", email='" + email + '\'' +
                ", hospital='" + hospital + '\'' +
                ", mobile_number='" + mobile_number + '\'' +
                ", shift_time='" + shift_time + '\'' +
                '}';
    }
}
