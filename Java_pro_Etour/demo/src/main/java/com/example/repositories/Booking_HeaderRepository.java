package com.example.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.entity.Booking_Header;

import jakarta.transaction.Transactional;


	@Repository
	@Transactional
	public interface Booking_HeaderRepository extends JpaRepository<Booking_Header, Integer> {
//	@Modifying
//		@Query("UPDATE Booking_Header c SET c.booking_date = :booking_date, c.noofpassanger = :noofpassanger, c.tour_amount = :tour_amount, c.taxes = :taxes, c.total_amount = :total_amount, c.pkg_id = :pkg_id, c.departure_id = :departure_id, c.cust_id = :cust_id WHERE c.booking_id = :booking_id")
//		  public void update(@Param("booking_date") Date bdate, @Param("noofpassanger") int no, @Param("tour_amount") int amt, @Param("taxes") int taxes,@Param("total_amount") int totalamt, @Param("pkg_id") int pid, @Param("departure_id") int did, @Param("cust_id") int cid, @Param("booking_id") int id);
		}
	

