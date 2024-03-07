package com.example.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.entity.Date_Master;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface Date_MasterRepository extends JpaRepository<Date_Master, Integer> {
//@Modifying
//	@Query("Update Date_Master t set t.depart_date=:depart_date,t.end_date=:end_date,t.no_of_days=:no_of_days,t.catmaster_id=:catmaster_id where t.departure_id = :departure_id ")
//	public void update(@Param("depart_date") Date depart_date,@Param("end_date") Date end_date,@Param("no_of_days") int no_of_days,@Param("catmaster_id") int catmaster_id,@Param("departure_id") int departure_id);
   
	@Modifying
	@Query(value = "SELECT * FROM Date_Master WHERE pkg_id = :pkgId", nativeQuery = true)
		public List<Date_Master> findBypkgId(@Param("pkgId")int pkgId);
		
		List<Date_Master> findByDepartDateBetween(Date departDate, Date endDate);
		
}