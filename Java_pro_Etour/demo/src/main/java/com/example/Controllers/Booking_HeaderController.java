package com.example.Controllers;
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

// Rajesh Edited for git change check

import com.example.entity.Booking_Header;
import com.example.services.Booking_HeaderManagerImpl;



@RequestMapping("api/booking_header")
@RestController  
@CrossOrigin("*")
public class Booking_HeaderController {
	@Autowired
	Booking_HeaderManagerImpl manager;
	
	 @PostMapping
	 public void addbooking(@RequestBody Booking_Header booking)
	 {
		System.out.println("addpro called");
		manager.addBooking(booking);
	 }
	 
	 @GetMapping
	 public List<Booking_Header> showBookings()
	 {
		  return manager.getAllBooking(); 
		
	 }
	
	 @GetMapping("/{bid}")
	 public Optional<Booking_Header> getBooking(@PathVariable int bid)
	 {
		Optional<Booking_Header> p=manager.getBooking(bid);
		return p;
	 }
	 
	 
	
	 @DeleteMapping("/{bid}")
	 public void removebooking(@PathVariable int bid)
	 {
		manager.delete(bid);
	 }
	 
//	 @PutMapping("/{pid}")
//	 public void updatepro(@RequestBody Booking_Header booking,@PathVariable int pid)
//	 {
//		manager.update(booking,pid);
//	 }
	 
}
