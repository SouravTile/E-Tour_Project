package com.example.services;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.entity.Passenger_Master;
import com.example.repositories.Passenger_Master_Repo;


@Service
public class Passenger_Master_Impl implements Passenger_Services{
	
	@Autowired
	Passenger_Master_Repo repo;

	
	
    @Override
	public void addPassanger(Passenger_Master PassangerMaster) {
		repo.save(PassangerMaster);
	}

	@Override
	public List<Passenger_Master> getPassangerMasters() {
		return repo.findAll();
	}

	@Override
	public void delete(int departureId) {
		repo.deleteById(departureId);
	}

	@Override
	public Optional<Passenger_Master> getById(int departureId) {
		
		return repo.findById(departureId);
	}

	@Override
	public int getBycusttId(int id) {
		// TODO Auto-generated method stub
		return repo.findByCustId(id);
	}

	@Override
	public List<Passenger_Master> findBycustId(int id) {
		// TODO Auto-generated method stub
		return repo.findByCust(id);
	}

	@Override
	public int findSum(int id) {
		// TODO Auto-generated method stub
		return repo.findSum(id);
	}

//	@Override
//	public void update(Passanger_Master pmaster, int id) {
//		 repo.update(pmaster.getPax_name(),pmaster.getPax_birthdate(), pmaster.getPax_type(), pmaster.getPax_amount(), pmaster.getBooking_id(),id);
//		
//	}

}