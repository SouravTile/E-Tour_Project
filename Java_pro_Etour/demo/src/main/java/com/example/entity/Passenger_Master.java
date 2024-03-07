package com.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;
@Entity
@Table(name = "Passenger_Master")
public class Passenger_Master {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int passengerId;
    
    private String passengerName;
    
    private Date birthdate;
    
    private String passengerType;
    
    private int passengerAmount;
    
    private int custId;
    
    public int getPassengerId() {
        return passengerId;
    }
    
    public void setPassengerId(int passengerId) {
        this.passengerId = passengerId;
    }
    
    public String getPassengerName() {
        return passengerName;
    }
    
    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }
    
    public Date getBirthdate() {
        return birthdate;
    }
    
    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }
    
    public String getPassengerType() {
        return passengerType;
    }
    
    public void setPassengerType(String passengerType) {
        this.passengerType = passengerType;
    }
    
    public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getPassengerAmount() {
        return passengerAmount;
    }
    
    public void setPassengerAmount(int passengerAmount) {
        this.passengerAmount = passengerAmount;
    }
    
    
	
}