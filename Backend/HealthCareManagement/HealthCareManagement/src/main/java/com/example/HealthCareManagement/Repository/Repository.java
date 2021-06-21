package com.example.HealthCareManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HealthCareManagement.Model.Patient;

public interface Repository extends JpaRepository<Patient, String> {

}
