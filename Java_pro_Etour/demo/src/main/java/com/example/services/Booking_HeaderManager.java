package com.example.services;
import java.util.List;

import com.example.entity.Booking_Header;
import java.util.Optional;
public interface Booking_HeaderManager {

	 void addBooking(Booking_Header booking);
	 List<Booking_Header> getAllBooking();
	 void delete(int id);
	 //void update(Booking_Header booking,int id);
	 Optional<Booking_Header> getBooking(int id);
}
