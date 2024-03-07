package com.example.Controllers;
import com.example.services.CategoryMasterManager;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.CategoryMaster;



@RestController  
@CrossOrigin("*")
@RequestMapping("api/categorymaster")
public class CategoryMasterController {
	
	@Autowired                                                                                                                                                           
	CategoryMasterManager manager;
	
	@PostMapping
	 public void addbooking(@RequestBody CategoryMaster category)
	 {
		System.out.println("Adding Category");
		manager.addCategory(category);
	 }
	 @GetMapping
	 public List<CategoryMaster> showCategories()
	 {
		 System.out.println("showallcategories called");
		 
		  return manager.getAllCategory(); 
	 }
	 
	 @GetMapping("/{bid}")  
	 public Optional<CategoryMaster> getBooking(@PathVariable int bid)
	 {
		 System.out.println("getspecific category by bid called");
		Optional<CategoryMaster> p=manager.getCategory(bid);
		return p;
	 }
	 
	 @GetMapping("/bycatId/{name}")
	 public List<CategoryMaster> getByName(@PathVariable String name)
	 {
		 System.out.println("Main category Table query");
		List<CategoryMaster> p=manager.findBycatId(name);
		return p;
	 }
	 
	
	 @DeleteMapping("/{bid}")
	 public void removecategory(@PathVariable int bid)
	 {
		 System.out.println("bid called");
		manager.delete(bid);
	 }
	 
	 @GetMapping("/bysubcatId/{name}")
	 public List<CategoryMaster> getBysubcatName(@PathVariable String name)
	 {
		 System.out.println("getting category using sub category id ");
		List<CategoryMaster> p=manager.findBysubCatId(name);
		return p;
	 }
	 
	 @GetMapping("/bycatnameId/{name}")
	 public List<CategoryMaster> getByTourName(@PathVariable String name)
	 {
		 System.out.println("bycat name it called by name ");
		List<CategoryMaster> p=manager.findByCatName(name);
		return p;
	 }
	 
	 @GetMapping("/bycat")
	 public List<String> getBycatName()
	 {
		 System.out.println("bycat called");
		List<String> p=manager.findAllDistinctCatIds();
		return p;
	 }
	 
	 @GetMapping("/bysubcat")
	 public List<String> getBysubName()
	 {
		 System.out.println("bysubcat called");
		List<String> p=manager.findAllDistinctsubCatIds();
		return p;
	 }
	 
	 @GetMapping("/bycatMasterId/{catMasterId}")
	 public Optional<CategoryMaster> getCategoryById(@PathVariable int catMasterId) 
	 {
		 System.out.println("bycatMasterId/catMassterId called");
	        return manager.getCategoryById(catMasterId);
	 }
	 
	 @GetMapping("/bycatMaster/{catMasterId}")
	 public String getFlagbycatid(@PathVariable String catMasterId)
	 {
		 return manager.getFlagById(catMasterId);
	 }
}
