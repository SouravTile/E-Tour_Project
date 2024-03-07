package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Itinerary_Master;
import com.example.repositories.Itinerary_MasterRepository;
@Service
public class ItineraryMasterServiceImpl implements Itinerary_Service {
	@Autowired
	 Itinerary_MasterRepository repo1;
	@Override
	public void addItinerary(Itinerary_Master itineraryMaster) {
		// TODO Auto-generated method stub
		repo1.save(itineraryMaster);
	}

	@Override
	public List<Itinerary_Master> getItineraryMasters() {
		return repo1.findAll();
	}

	@Override
	public void delete(int itrId) {
		repo1.deleteById(itrId);
		
	}

	@Override
	public Optional<Itinerary_Master> getById(int itrId) {
		// TODO Auto-generated method stub
		return repo1.findById(itrId);
	}

	@Override
	public List<Itinerary_Master> findBypkgId(int pkgId) {
		return repo1.findBypkgId(pkgId);
		
	}

	@Override
	public List<Itinerary_Master> addItineraries(List<Itinerary_Master> itinary) {
		
		return repo1.saveAll(itinary);
	}

//	@Override
//	public void update(Itinerary_Master imaster, int itrId) {
//		repo1.update(imaster.getDay_no(),imaster.getItr_dtl(),imaster.getCatmaster_id(), itrId);
//		
//	}

}