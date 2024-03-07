package com.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Date;
@Entity
@Table(name="Cost_Master")
public class Cost_Master {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int costId;
    private int cost;
    private int singlePersonCost;
    private int extraPersonCost;
    private int childWithBed;
    private int childWithoutBed;
    private Date validFrom;
    private Date validTo;
    
    private int pkgId;

	public int getCostId() {
		return costId;
	}

	public void setCostId(int costId) {
		this.costId = costId;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public int getSinglePersonCost() {
		return singlePersonCost;
	}

	public void setSinglePersonCost(int singlePersonCost) {
		this.singlePersonCost = singlePersonCost;
	}

	public int getExtraPersonCost() {
		return extraPersonCost;
	}

	public void setExtraPersonCost(int extraPersonCost) {
		this.extraPersonCost = extraPersonCost;
	}

	public int getChildWithBed() {
		return childWithBed;
	}

	public void setChildWithBed(int childWithBed) {
		this.childWithBed = childWithBed;
	}

	public int getChildWithoutBed() {
		return childWithoutBed;
	}

	public void setChildWithoutBed(int childWithoutBed) {
		this.childWithoutBed = childWithoutBed;
	}

	public Date getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}

	public Date getValidTo() {
		return validTo;
	}

	public void setValidTo(Date validTo) {
		this.validTo = validTo;
	}

	public int getPkgId() {
		return pkgId;
	}

	public void setPkgId(int pkgId) {
		this.pkgId = pkgId;
	}


    
}
