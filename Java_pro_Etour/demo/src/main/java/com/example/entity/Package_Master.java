package com.example.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.OneToMany;

import jakarta.persistence.Table;

@Entity
@Table(name = "Package_Master")
public class Package_Master {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pkgId;
    
    private String pkgName;
    
    private int catMasterId;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "pkgId")
    private Set<Booking_Header> bookingHeaders;    //for particular category and its package these are the number of bookings 

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "pkgId")
    private Set<Cost_Master> costMaster;  // for particular category and its package these are different number of costs 
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "pkgId")
    private Set<Itinerary_Master> itineraryMaster;   // for particular category and its package these are different iteneary details of the tour 
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "pkgId")
    private Set<Date_Master> dateMaster;    // for particular category and its package these are different number of Dates of departure 
    
	public Set<Cost_Master> getCostMaster() {
		return costMaster;
	}

	public Set<Itinerary_Master> getItineraryMaster() {
		return itineraryMaster;
	}

	public void setItineraryMaster(Set<Itinerary_Master> itineraryMaster) {
		this.itineraryMaster = itineraryMaster;
	}

	public void setCostMaster(Set<Cost_Master> costMaster) {
		this.costMaster = costMaster;
	}

	public int getPkgId() {
		return pkgId;
	}

	public void setPkgId(int pkgId) {
		this.pkgId = pkgId;
	}

	public String getPkgName() {
		return pkgName;
	}

	public void setPkgName(String pkgName) {
		this.pkgName = pkgName;
	}

	public Set<Date_Master> getDateMaster() {
		return dateMaster;
	}

	public void setDateMaster(Set<Date_Master> dateMaster) {
		this.dateMaster = dateMaster;
	}

	public int getCatMasterId() {
		return catMasterId;
	}

	public void setCatMasterId(int catMasterId) {
		this.catMasterId = catMasterId;
	}

	public Set<Booking_Header> getBookingHeaders() {
		return bookingHeaders;
	}

	public void setBookingHeaders(Set<Booking_Header> bookingHeaders) {
		this.bookingHeaders = bookingHeaders;
	}


	
	

}
