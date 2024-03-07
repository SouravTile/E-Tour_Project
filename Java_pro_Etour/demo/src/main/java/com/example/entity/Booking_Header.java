package com.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "Booking_Header")
public class Booking_Header {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    
    private Date bookingDate;
    private int numberOfPassengers;
    private int tourAmount;
    private int taxes;
    private int totalAmount;
    private int pkgId;
    private int departureId;
    private int custId;
    
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public Date getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}
	public int getNumberOfPassengers() {
		return numberOfPassengers;
	}
	public void setNumberOfPassengers(int numberOfPassengers) {
		this.numberOfPassengers = numberOfPassengers;
	}
	public int getTourAmount() {
		return tourAmount;
	}
	public void setTourAmount(int tourAmount) {
		this.tourAmount = tourAmount;
	}
	public int getTaxes() {
		return taxes;
	}
	public void setTaxes(int taxes) {
		this.taxes = taxes;
	}
	public int getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public int getDepartureId() {
		return departureId;
	}
	public void setDepartureId(int departureId) {
		this.departureId = departureId;
	}
	public int getPkgId() {
		return pkgId;
	}
	public void setPkgId(int pkgId) {
		this.pkgId = pkgId;
	}
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
}
