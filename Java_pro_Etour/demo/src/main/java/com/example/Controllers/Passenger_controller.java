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


import com.example.entity.Passenger_Master;
import com.example.services.Passenger_Services;
@RequestMapping("api/passenger_master")
@RestController
@CrossOrigin("*")
public class Passenger_controller {

	@Autowired
	Passenger_Services tservices;

	@PostMapping
	public void addPassanger(@RequestBody Passenger_Master t) {
		// System.out.println(t);
		tservices.addPassanger(t);
	}

	@GetMapping
	public List<Passenger_Master> getPassanger() {
		return tservices.getPassangerMasters();
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		tservices.delete(id);
	}

//	@PutMapping("/{id}")
//	public void update(@RequestBody Passanger_Master pack, @PathVariable int id) {
//		tservices.update(pack, id);
//	}

	@GetMapping("/{id}")
	public Optional<Passenger_Master> Get(@PathVariable int id) {
		return tservices.getById(id);
	}
	
	@GetMapping("/bycust/{id}")
	public int GetCustId(@PathVariable int id) {
		return tservices.getBycusttId(id);
	}
	
	@GetMapping("/ById/{id}")
    public List<Passenger_Master> getPassengerById(@PathVariable int id) {
        return tservices.findBycustId(id);
    }
    
    @GetMapping("/Bysum/{id}")
    public int getSumById(@PathVariable int id) {
        return tservices.findSum(id);
    }
}