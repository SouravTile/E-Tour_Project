package com.example.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;


import com.example.entity.Date_Master;	

public interface Date_MasterService {
		public void addDate(Date_Master dateMaster);
	    List<Date_Master> getDateMasters();
	    void delete(int departureId);
	    //void update(Date_Master datemaster, int id);
	    Optional<Date_Master> getById(int departureId);
		public List<Date_Master> findBypkgId(int id);
		public List<Date_Master> getRecordsByDateRange(Date startDate, Date endDate);
		public void updateDate(Date_Master date);
}