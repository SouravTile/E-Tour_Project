package com.example.Controllers;

import com.example.entity.Itinerary_Master;
import com.example.services.Itinerary_Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RequestMapping("api/itinerary_master")
@RestController
@CrossOrigin("*")
public class Itinerary_controller {

    @Autowired
    Itinerary_Service itineraryMasterService;

    @PostMapping
    public void addItinerary(@RequestBody Itinerary_Master itineraryMaster) {
        itineraryMasterService.addItinerary(itineraryMaster);
    }

    @GetMapping
    public List<Itinerary_Master> getItineraryMasters() {
        return itineraryMasterService.getItineraryMasters();
    }

    @DeleteMapping("/{id}")
    public void deleteItinerary(@PathVariable int id) {
        itineraryMasterService.delete(id);
    }

	@PostMapping("/addItineraries")
	public void addItinerary(@RequestBody List<Itinerary_Master> Itinerary)
	{
		itineraryMasterService.addItineraries(Itinerary);
	}
//	 @PutMapping("/{id}")
//	 public void update(@RequestBody Itinerary_Master itineraryMaster, @PathVariable int id) 
//	 { 
//		 itineraryMasterService.update(itineraryMaster, id); 
//     }
	 

    @GetMapping("/{id}")
    public Optional<Itinerary_Master> getItineraryById(@PathVariable int id) {
        return itineraryMasterService.getById(id);
    }
    
    @GetMapping("/ById/{id}")
    public List<Itinerary_Master> getPkgById(@PathVariable int id) {
        return itineraryMasterService.findBypkgId(id);
    }
}