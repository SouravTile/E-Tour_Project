package com.example.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
@Table(name="Category_Master")
public class CategoryMaster {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int catMasterId;
	private String catId;
	private String subCatId;
	private String CatName;
	private String CatImagePath;
	private String Flag;
	
	public int getCatMasterId() {
		return catMasterId;
	}
	public void setCatMasterId(int catMasterId) {
		this.catMasterId = catMasterId;
	}
	public String getCatId() {
		return catId;
	}
	public void setCatId(String catId) {
		this.catId = catId;
	}
	public String getSubCatId() {
		return subCatId;
	}
	public void setSubCatId(String subCatId) {
		this.subCatId = subCatId;
	}
	public String getCatName() {
		return CatName;
	}
	public void setCatName(String catName) {
		CatName = catName;
	}
	public String getCatImagePath() {
		return CatImagePath;
	}
	public void setCatImagePath(String catImagePath) {
		CatImagePath = catImagePath;
	}
	public String getFlag()
	{
		return Flag;
	}
	public void setFlag(String flag) {
		Flag = flag;
	}
}
