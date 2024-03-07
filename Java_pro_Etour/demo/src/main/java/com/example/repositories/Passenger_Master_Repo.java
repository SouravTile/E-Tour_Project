package com.example.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.Passenger_Master;

import jakarta.transaction.Transactional;

	@Repository
	@Transactional
	public interface Passenger_Master_Repo extends JpaRepository<Passenger_Master,Integer> {
		
		@Query(value = "select count(passenger_id) from passenger_master where cust_id = :custId", nativeQuery = true)
	    int findByCustId(@Param("custId") int id);
//	@Modifying
//		@Query("update Passanger_Master p set p.pax_name = :pax_name ,p.pax_birthdate = :pax_birthdate,p.pax_type = :pax_type,p.pax_amount = :pax_amount,p.booking_id= :booking_id where p.pax_id = :pax_id")
//		void update(@Param("pax_name") String pax_name,@Param("pax_birthdate") Date pax_birthdate,@Param("pax_type") String pax_type,@Param("pax_amount") int pax_amount,@Param("booking_id")int booking_id,@Param("pax_id")int id);


		@Query(value = "SELECT * FROM Passenger_Master WHERE cust_id = :custId", nativeQuery = true)
		List<Passenger_Master> findByCust(@Param("custId") int id);

		// query used for sum of amount for particular customerid and its members - MyMan
		@Query(value = "select sum(passenger_amount) from passenger_Master where cust_id = :custId", nativeQuery = true)
		int findSum(@Param("custId") int id);

}
