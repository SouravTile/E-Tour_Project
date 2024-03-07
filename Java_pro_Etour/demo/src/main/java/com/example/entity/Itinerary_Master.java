package com.example.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Itinerary_Master")
public class Itinerary_Master {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itineraryId;
    @Column(name="itineraryDetail",length = 2000)
    private String itineraryDetail;
    private int pkgId;
    private String imagePath;
   
    public int getPkgId() {
		return pkgId;
	}

	public void setPkgId(int pkgId) {
		this.pkgId = pkgId;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public int getItineraryId() {
        return itineraryId;
    }
    
    public void setItineraryId(int itineraryId) {
        this.itineraryId = itineraryId;
    }
    
    
    public String getItineraryDetail() {
        return itineraryDetail;
    }
    
    public void setItineraryDetail(String itineraryDetail) {
        this.itineraryDetail = itineraryDetail;
    }
    
    
}