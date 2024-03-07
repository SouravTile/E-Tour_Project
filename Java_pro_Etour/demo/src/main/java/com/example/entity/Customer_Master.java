package com.example.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name="Customer_Master")
public class Customer_Master {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int custId;
    
    private String firstName;
    private String lastName;
    private int age;
    private String gender;
    private int countryCode;
    private long mobileNumber;
    private String address;
    private String email;
    @Column(unique = true)
    private long adharNumber;
    @Column(unique = true)
    private String userName;
   

	private String passWord;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "custId")
    private Set<Booking_Header> bookingHeaders;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "custId")
    private Set<Passenger_Master> passengermaster;
	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(int countryCode) {
		this.countryCode = countryCode;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getAdharNumber() {
		return adharNumber;
	}

	public void setAdharNumber(long adharNumber) {
		this.adharNumber = adharNumber;
	}

	public Set<Booking_Header> getBookingHeaders() {
		return bookingHeaders;
	}

	public void setBookingHeaders(Set<Booking_Header> bookingHeaders) {
		this.bookingHeaders = bookingHeaders;
	}
	 public String getUserName() {
			return userName;
	}

	public void setUserName(String userName) {
			this.userName = userName;
	}

	public String getPassWord() {
			return passWord;
	}

	public void setPassWord(String passWord) {
			this.passWord = passWord;
	}
	public Set<Passenger_Master> getPassengermaster() {
			return passengermaster;
	}

	public void setPassengermaster(Set<Passenger_Master> passengermaster) {
			this.passengermaster = passengermaster;
	}
}
