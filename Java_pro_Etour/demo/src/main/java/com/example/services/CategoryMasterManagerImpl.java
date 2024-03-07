package com.example.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entity.CategoryMaster;
import com.example.repositories.CategoryMasterRepository;


@Service
public class CategoryMasterManagerImpl implements CategoryMasterManager {

	@Autowired
	CategoryMasterRepository repository;

	// Adding a new category 
	public void addCategory(CategoryMaster c) {
		repository.save(c);     
	}
	// Getting all categories
	@Override
	public List<CategoryMaster> getAllCategory() {
		return repository.findAll();
	}
	// deleting a particular category by id 
	public void delete(int id) {
		
		repository.deleteById(id);
	}

	// fetching a particular category by id
	public Optional<CategoryMaster> getCategory(int id) {
	
		return repository.findById(id);
	}


	// fetching a category using catid
	public List<CategoryMaster> findBycatId(String catId) {
		// TODO Auto-generated method stub
		return repository.findBycatId(catId);
	}
	
	// fetching the category by subcatid
	public List<CategoryMaster> findBysubCatId(String subCatId) {
		// TODO Auto-generated method stub
		return repository.findBysubCatId(subCatId);
	}

	// fetching all distinct categories 
	public List<String> findAllDistinctCatIds() {
		// TODO Auto-generated method stub
		return repository.findAllDistinctCatIds();
	}

	// fetching all distinct subcategories 
	public List<String> findAllDistinctsubCatIds() {
		// TODO Auto-generated method stub
		return repository.findAllDistinctsubCatIds();
	}

	// fetch categories by name 
	public List<CategoryMaster> findByCatName(String name) {
		// TODO Auto-generated method stub
		return repository.findBysubCatId(name);
	}

	 // fetching particular category by catmasterid
	public Optional<CategoryMaster> getCategoryById(int catMasterId) {
        return repository.findById(catMasterId);
	}
        
    public String getFlagById(String id) {
    		return repository.getflag(id);
    	}
    }

