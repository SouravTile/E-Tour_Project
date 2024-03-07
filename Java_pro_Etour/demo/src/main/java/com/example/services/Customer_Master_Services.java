package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.entity.Customer_Master;



public interface Customer_Master_Services  {

	void addCustomer(Customer_Master t);
	List<Customer_Master> getCustomer();
	void delete(int id);
	//void update(Customer_Master customer,int id);
	Optional<Customer_Master> getById(int id);
	Optional<List<String>> findByuserName(String username, String password);
}