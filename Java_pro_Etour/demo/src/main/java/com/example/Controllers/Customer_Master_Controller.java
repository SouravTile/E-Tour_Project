package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.Customer_Master;
import com.example.services.Customer_Master_Services;
@RequestMapping("api/customer_master")
@RestController
@CrossOrigin("*")
public class Customer_Master_Controller {

	@Autowired
	Customer_Master_Services tservices;
	
	@PostMapping
	public void addCustomer(@RequestBody Customer_Master t)
	{
		tservices.addCustomer(t);
	}
	
	@GetMapping("/login")   // used to get the cust id if the valid user has passed proper username and password 
	public Optional<List<String>> authCustomer(@RequestParam String username, @RequestParam String password )
	{
		return tservices.findByuserName(username, password);
	}
	
	@GetMapping
	public List<Customer_Master> getCustomer()
	{
		return tservices.getCustomer();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id)
	{
		tservices.delete(id);
	}
	
	@GetMapping("/{id}")
	public Optional<Customer_Master> Get(@PathVariable int id)
	{
		return tservices.getById(id);
	}
	
	
//	@PutMapping("/{id}")
//	public void update(@RequestBody Customer_Master cust, @PathVariable int id) {
//		tservices.update(cust, id);
//	}
}