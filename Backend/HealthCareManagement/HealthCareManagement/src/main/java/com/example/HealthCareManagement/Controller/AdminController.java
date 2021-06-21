package com.example.HealthCareManagement.Controller;

import com.example.HealthCareManagement.Model.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class AdminController {

    @PostMapping("/get_admin")
    public String get_admin(@RequestBody Admin admin) {
        if (admin.getUsername().equals("admin") && admin.getPassword().equals("admin123")) {
            return "success";
        } else {
            return "failure";
        }
    }

    @PostMapping("/add_doctors")
    public String add_doctors(@RequestBody Doctors doctors) {
        Configuration con = new Configuration().configure().addAnnotatedClass(Doctors.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            session.save(doctors);
            transaction.commit();
        } catch(Exception e) {
            return "failure";
        }
        return "success";
    }

    @GetMapping("/get_doctors")
    public List<Doctors> get_doctors() {
        List<Doctors> doctors = new ArrayList<>();
        Configuration con = new Configuration().configure().addAnnotatedClass(Doctors.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            doctors = session.createQuery("select a from Doctors a", Doctors.class).getResultList();
            transaction.commit();
        } catch(Exception e) {
            return null;
        }
        return doctors;
    }

    @DeleteMapping("/delete_doctor")
    public String delete_doctors(@RequestParam String email) {
        Configuration con = new Configuration().configure().addAnnotatedClass(Doctors.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            Doctors doctor = session.get(Doctors.class, email);
            session.delete(doctor);
            transaction.commit();
        } catch(Exception e) {
            return "failure";
        }
        return "success";
    }

    @PutMapping("/edit_doctors")
    public String edit_doctors(@RequestBody Doctors doctors) {
        Configuration con = new Configuration().configure().addAnnotatedClass(Doctors.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            session.update(doctors);
            transaction.commit();
        } catch(Exception e) {
            return "failure";
        }
        return "success";
    }

    @PostMapping("/get_doctor_credential")
    public String get_doctor_credential(@RequestBody Login_Doctor doctor) {
        System.out.println(doctor);
        Configuration con = new Configuration().configure().addAnnotatedClass(Doctors.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            Doctors get_doctor = (Doctors) session.get(Doctors.class, doctor.getUsername());
            if (get_doctor.getEmail().equals(doctor.getUsername()) && get_doctor.getPassword().equals(doctor.getPassword())) {
                return "success";
            }
            transaction.commit();
        } catch(Exception e) {
            return "failure";
        }
        return "failure";
    }

    @GetMapping("/get_appointed_patient")
    public List<Patient_History> get_appointed_patient() {
        List<Patient_History> patient_history = new ArrayList<>();
        Configuration con = new Configuration().configure().addAnnotatedClass(Patient_History.class);
        SessionFactory sf = con.buildSessionFactory();
        Session session = sf.openSession();
        Transaction transaction = session.beginTransaction();
        try {
            patient_history = session.createQuery("select a from Patient_History a", Patient_History.class).getResultList();
            transaction.commit();
        } catch(Exception e) {
            return null;
        }
        return patient_history;
    }


}
