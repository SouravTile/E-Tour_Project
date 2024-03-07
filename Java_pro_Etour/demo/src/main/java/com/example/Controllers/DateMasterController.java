package com.example.Controllers;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.entity.Date_Master;
import com.example.services.Date_MasterService;



@RequestMapping("api/date_master")
@RestController
@CrossOrigin("*")

public class DateMasterController 
{
	@Autowired
	Date_MasterService dservices;
	@PostMapping
	public void addProduct(@RequestBody Date_Master d) {
		dservices.addDate(d);
	}
	@GetMapping
	public List<Date_Master> getDateMaster() {
		return dservices.getDateMasters();
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		dservices.delete(id);
	}
//	@PutMapping("/{id}")
//	public void update(@RequestBody Date_Master date,@PathVariable int id) {
//		dservices.update(date, id);
//	}
	@PutMapping("/{id}")
	public void update(@RequestBody Date_Master date,@PathVariable int id)
	{	date.setDepartureId(id);
		dservices.updateDate(date);
	}
	@GetMapping(value="/{id}")
	public Optional<Date_Master> Get(@PathVariable int id) {
		return dservices.getById(id);
	}
	
	@GetMapping("/ById/{id}")
    public List<Date_Master> getPackageById(@PathVariable int id) {
        return dservices.findBypkgId(id);
    }
    
    @GetMapping("/filtered")
    public List<Date_Master> getFilteredRecords(
            @RequestParam("startDate")  Date startDate,
            @RequestParam("endDate")  Date endDate,
            Model model)
     {
        //List<Date_Master> dateMasters = dservices.getRecordsByDateRange(startDate, endDate);
        //model.addAttribute("dateMasterList", dateMasters);
        return dservices.getRecordsByDateRange(startDate, endDate);
    }
}











