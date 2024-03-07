package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Customer_Master;
import com.example.repositories.Customer_Masterrepository;
@Service
public class Customer_Master_Impl implements Customer_Master_Services{

	@Autowired
	Customer_Masterrepository trepository;
	
	@Override
	public void addCustomer(Customer_Master t) {
		
		trepository.save(t);
	}

	@Override
	public List<Customer_Master> getCustomer() {
		// TODO Auto-generated method stub
		return trepository.findAll();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		trepository.deleteById(id);
	}

//	@Override
//	public void update(Customer_Master customer, int id) {
//		trepository.update(customer.getFirst_name(),customer.getLast_name(),customer.getAge(),customer.getGender(),customer.getCountry_code(),customer.getMo_no(),customer.getAddress(),customer.getEmail(),customer.getAdhar_no(),id);
//		
//	}

	@Override
	public Optional<Customer_Master> getById(int id) {
		// TODO Auto-generated method stub
		return trepository.findById(id);
	}
	
	@Override
	public Optional<List<String>> findByuserName(String username, String password) {
		// TODO Auto-generated method stub
		System.out.println("Called Get User");
		List<String> str = trepository.findByuserName(username, password);
		System.out.println(str);  
		if(str.isEmpty()) {   // if fetch is unsuccessful it will return a empty list of string 
			System.out.println("Not Found");
			return null;  // return null from here only to react 
		}
		 for (String custId : str) {
	            System.out.println("cust_id: " + custId);
	            
	        }
		 
		 return Optional.ofNullable(str);   // if user successfully logined in then send its custid
	}
}