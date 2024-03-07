package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entity.CategoryMaster;

public interface CategoryMasterManager {
	 void addCategory(CategoryMaster category);  // for adding category 
	 List<CategoryMaster> getAllCategory();    // for getting all categories 
	 void delete(int id);                             // for deleting particular  category
	 Optional<CategoryMaster> getCategory(int id);    // for selecting particular category by id
	 List<CategoryMaster> findBycatId(String catId);           // for selecting particular category  by category id
	 List<CategoryMaster> findBysubCatId(String subCatId);    // for selecting particular category by subcategoryid
	 public List<String> findAllDistinctCatIds();              // for searching all distinct categories
	 public List<String> findAllDistinctsubCatIds();           // for searching all distinct subcategories
	 public Optional<CategoryMaster> getCategoryById(int catMasterId);   // for searching category by catmasterid
	 List<CategoryMaster> findByCatName(String name);    // for selecting particular category name from name
	 String getFlagById(String cid);
}