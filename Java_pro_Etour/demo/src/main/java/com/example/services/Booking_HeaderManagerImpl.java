package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Booking_Header;
import com.example.repositories.Booking_HeaderRepository;

@Service
public class Booking_HeaderManagerImpl implements Booking_HeaderManager

{   
	@Autowired
	Booking_HeaderRepository repository;

	
	public void addBooking(Booking_Header booking) {
		repository.save(booking);
		
	}


	public List<Booking_Header> getAllBooking() {
	
		return repository.findAll();
	}

	
	public void delete(int id) {
		repository.deleteById(id);
	}


	
	public Optional<Booking_Header> getBooking(int id) {
	
		return repository.findById(id);
	}

//	@Override
//	public void update(Booking_Header booking, int id) {
//		repository.update(booking.getBooking_date(),booking.getNoofpassanger(),booking.getTour_amount(),booking.getTaxes(),booking.getTotal_amount(),booking.getPkg_id(),booking.getDeparture_id(),booking.getCust_id(),id);;
//		
//	}

}