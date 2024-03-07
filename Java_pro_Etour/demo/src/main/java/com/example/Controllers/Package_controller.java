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

import com.example.entity.Package_Master;
import com.example.services.Package_Services;
@RequestMapping("api/package_master")
@RestController
@CrossOrigin("*")
public class Package_controller 
{
	@Autowired
	Package_Services dservices;
	@PostMapping
	public void addProduct(@RequestBody Package_Master d) {
		dservices.addPackage(d);
	}
	@GetMapping
	public List<Package_Master> getPackageMaster() {
		return dservices.getPackageMasters();
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		dservices.delete(id);
	}
//	@PutMapping("/{id}")
//	public void update(@RequestBody Package_Master Package,@PathVariable int id) {
//		dservices.update(Package, id);
//	}
	@GetMapping("/{id}")
	public Optional<Package_Master> Get(@PathVariable int id) {
		System.out.println("yo");
		return dservices.getById(id);
	}
	
	@GetMapping("catmaster/{id}")
	public List<Package_Master> Getbycatmaster(@PathVariable int id) {
		System.out.println("catmaster for particular id");
		return dservices.getByCatmaster(id);
	}
	
	
	@GetMapping("/pkg/{name}")
    public List<Package_Master> searchPackagesByName(@PathVariable String name) {
        return dservices.searchPackagesByName(name);
    }
}