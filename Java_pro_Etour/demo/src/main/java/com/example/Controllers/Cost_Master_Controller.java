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

import com.example.entity.Cost_Master;

import com.example.services.Cost_Master_Services;

@RequestMapping("api/cost_master")
@RestController
@CrossOrigin("*")
public class Cost_Master_Controller {

	@Autowired
	Cost_Master_Services tservices;

	@PostMapping
	public void addCost(@RequestBody Cost_Master t) {

		tservices.addCost(t);
	}

	@GetMapping
	public List<Cost_Master> getCost() {
		return tservices.getCost();
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		tservices.delete(id);
	}



//	@PutMapping("/{id}")
//	public void update(@RequestBody Cost_Master cost, @PathVariable int id) {
//		tservices.update(cost, id);
//	}

	@GetMapping(value = "/{id}")
	public Optional<Cost_Master> Get(@PathVariable int id) {
		return tservices.getById(id);
	}
	
    @GetMapping("/ById/{id}")  // important one here this will be called when one invokes for cost 
    public List<Cost_Master> getPackageById(@PathVariable int id) {
        return tservices.findBypkgId(id);
    }
    
    @GetMapping("/cost/{costs}")
    public List<Cost_Master> getCostsByCostLessThanEqual(@PathVariable int costs) {
        return tservices.getCostsByCostLessThanEqual(costs);
    }
}