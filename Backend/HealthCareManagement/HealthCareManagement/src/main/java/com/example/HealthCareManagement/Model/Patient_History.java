package com.example.HealthCareManagement.Model;

import javax.persistence.*;

@Entity
@Table(name = "patient_history")
public class Patient_History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String doctor_email;
    private String patient_name;
    private String patient_mobile_no;
    private String patient_gender;
    private int patient_age;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDoctor_email() {
        return doctor_email;
    }

    public void setDoctor_email(String doctor_email) {
        this.doctor_email = doctor_email;
    }

    public String getPatient_name() {
        return patient_name;
    }

    public void setPatient_name(String patient_name) {
        this.patient_name = patient_name;
    }

    public String getPatient_mobile_no() {
        return patient_mobile_no;
    }

    public void setPatient_mobile_no(String patient_mobile_no) {
        this.patient_mobile_no = patient_mobile_no;
    }

    public String getPatient_gender() {
        return patient_gender;
    }

    public void setPatient_gender(String patient_gender) {
        this.patient_gender = patient_gender;
    }

    public int getPatient_age() {
        return patient_age;
    }

    public void setPatient_age(int patient_age) {
        this.patient_age = patient_age;
    }

    @Override
    public String toString() {
        return "Patient_History{" +
                "id='" + id + '\'' +
                ", doctor_email='" + doctor_email + '\'' +
                ", patient_name='" + patient_name + '\'' +
                ", patient_mobile_no='" + patient_mobile_no + '\'' +
                ", patient_gender='" + patient_gender + '\'' +
                ", patient_age='" + patient_age + '\'' +
                '}';
    }
}
