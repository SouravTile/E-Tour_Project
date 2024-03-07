package com.example.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.sql.Date;
import java.util.Set;
@Entity
@Table(name="Date_Master")
public class Date_Master {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int departureId;
	    
	    private Date departDate;
	    private Date endDate;
	    private int numberOfDays;
	    private int pkgId;
	    
	    @OneToMany(cascade = CascadeType.ALL)
	    @JoinColumn(name = "departureId")
	    private Set<Booking_Header> bookingHeaders;
	    
	    
	    public int getDepartureId() {
	        return departureId;
	    }
	    
	    public void setDepartureId(int departureId) {
	        this.departureId = departureId;
	    }
	    
	    public Date getDepartDate() {
	        return departDate;
	    }
	    
	    public void setDepartDate(Date departDate) {
	        this.departDate = departDate;
	    }
	    
	    public Date getEndDate() {
	        return endDate;
	    }
	    
	    public void setEndDate(Date endDate) {
	        this.endDate = endDate;
	    }
	    
	    public int getNumberOfDays() {
	        return numberOfDays;
	    }
	    
	    public void setNumberOfDays(int numberOfDays) {
	        this.numberOfDays = numberOfDays;
	    }
	    
	    public Set<Booking_Header> getBookingHeaders() {
	        return bookingHeaders;
	    }
	    
	    public void setBookingHeaders(Set<Booking_Header> bookingHeaders) {
	        this.bookingHeaders = bookingHeaders;
	    }

		public int getPkgId() {
			return pkgId;
		}

		public void setPkgId(int pkgId) {
			this.pkgId = pkgId;
		}
	    

}