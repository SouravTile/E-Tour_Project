package com.example.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Date_Master;
import com.example.repositories.Date_MasterRepository;

@Service
public class DateMasterServiceImpl implements Date_MasterService{
	
	@Autowired
	Date_MasterRepository repo;
	@Override
	public void addDate(Date_Master dateMaster) {
		repo.save(dateMaster);
	}

	@Override
	public List<Date_Master> getDateMasters() {
		return repo.findAll();
	}

	@Override
	public void delete(int departureId) {
		repo.deleteById(departureId);
	}

	@Override
	public Optional<Date_Master> getById(int departureId) {
		
		return repo.findById(departureId);
	}

	@Override
	public List<Date_Master> findBypkgId(int id) {
		// TODO Auto-generated method stub
		return repo.findBypkgId(id);
	}

//	@Override
//	public void update(Date_Master datemaster, int id) {
//		repo.update(datemaster.getDepart_date(),datemaster.getEnd_date(),datemaster.getNo_of_days(),datemaster.getCatmaster_id(),id);
//		
//	}
	
	public List<Date_Master> getRecordsByDateRange(Date startDate, Date endDate) {
        return repo.findByDepartDateBetween(startDate, endDate);
    }

	@Override
	public void updateDate(Date_Master date) {
		// TODO Auto-generated method stub
		repo.save(date);
		
	}

}