package com.example.HealthCareManagement.Controller;


import com.example.HealthCareManagement.Model.Login_Patient;
import com.example.HealthCareManagement.Model.Patient_History;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.*;

import com.example.HealthCareManagement.Model.Patient;

import javax.print.attribute.HashDocAttributeSet;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin("http://localhost:4200")
@RestController
public class UserController {

	@PostMapping("/storeData")
	public String store_data(@RequestBody Patient patient_details) {
		Configuration con = new Configuration().configure().addAnnotatedClass(Patient.class);
		SessionFactory sf = con.buildSessionFactory();
		Session session = sf.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(patient_details);
			transaction.commit();
		} catch(Exception e) {
			return "failure";
		}
		return "success";
	}

	@PostMapping("/getData")
	public String get_data(@RequestBody Login_Patient patient) {
		String email = patient.getEmail();
		String password = patient.getPassword();
		Configuration con = new Configuration().configure().addAnnotatedClass(Patient.class);
		SessionFactory sf = con.buildSessionFactory();
		Session session = sf.openSession();
		try {
			Transaction transaction = session.beginTransaction();
			Patient patient_details = session.get(Patient.class, email);
			transaction.commit();
			if (email.equals(patient_details.getEmail()) && password.equals(patient_details.getPassword())) {
				return "success";
			} else {
				return "failure";
			}
		} catch(Exception e) {
			return "failure_message";
		}
	}

	@PostMapping("/get_patient_details")
	public Patient get_patient_details(@RequestBody String email) {
		Configuration con = new Configuration().configure().addAnnotatedClass(Patient.class);
		SessionFactory sf = con.buildSessionFactory();
		Session session = sf.openSession();
		Transaction transaction = session.beginTransaction();
		Patient patient = new Patient();
		try {
			patient = (Patient) session.get(Patient.class, email);
			transaction.commit();
		} catch(Exception e) {
			return null;
		}
		return patient;
	}

	@PostMapping("/send_patient_details")
	public String patient_details(@RequestBody Patient_History patient) {
		Configuration con = new Configuration().configure().addAnnotatedClass(Patient_History.class);
		SessionFactory sf = con.buildSessionFactory();
		Session session = sf.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(patient);
			transaction.commit();
		} catch(Exception e) {
			return "failure";
		}
		return "success";
	}

}
