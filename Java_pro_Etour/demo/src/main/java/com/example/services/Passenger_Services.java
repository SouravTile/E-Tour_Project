package com.example.services;
import java.util.List;
import java.util.Optional;

import com.example.entity.Passenger_Master;


public interface Passenger_Services {
	public void addPassanger(Passenger_Master PackageMaster);
    List<Passenger_Master> getPassangerMasters();
    void delete(int departureId);
    //void update(Passanger_Master pmaster, int id);
    Optional<Passenger_Master> getById(int id);
	public int getBycusttId(int id);
	public List<Passenger_Master> findBycustId(int id);
	public int findSum(int id);
	
	
}
