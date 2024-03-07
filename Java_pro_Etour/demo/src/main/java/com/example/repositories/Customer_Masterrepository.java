package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.Customer_Master;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface Customer_Masterrepository extends JpaRepository<Customer_Master,Integer> {
//@Modifying
//	@Query("UPDATE Customer_Master t set t.first_name = :first_name, t.last_name = :last_name, t.age = :age, t.gender = :gender, t.country_code = :country_code, t.mo_no = :mo_no, t.address = :address, t.email = :email, t.adhar_no= :adhar_no where t.cust_id = :cust_id")
//	public void update(@Param("first_name") String fname,@Param("last_name") String lname,@Param("age") int age,@Param("gender") String gender,@Param("country_code") int country_code,@Param("mo_no") long mo_no , @Param("address") String address,@Param("email") String email,@Param("adhar_no") long adhar_no, @Param("cust_id") int cust_id);
	
	@Modifying
	@Query(value = "SELECT cust_id FROM customer_master WHERE user_name = :user_name AND pass_word = :pass_word", nativeQuery = true)
	List<String> findByuserName(@Param("user_name") String username, @Param("pass_word") String password);
}