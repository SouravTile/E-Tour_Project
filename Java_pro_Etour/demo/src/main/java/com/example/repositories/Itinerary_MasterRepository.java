package com.example.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.entity.Itinerary_Master;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface Itinerary_MasterRepository extends JpaRepository<Itinerary_Master, Integer>  {
//@Modifying
//	@Query("update Itinerary_Master i set i.day_no  = :day_no ,i.itr_dtl = :dtl, i.catmaster_id= :catmaster_id where i.itr_id = :itr_id")
//	void update(@Param("day_no") int day_no,@Param("dtl") String dtl,@Param("catmaster_id") int catmaster_id,@Param("itr_id")int id);
	
@Modifying
@Query(value = "SELECT * FROM Itinerary_Master WHERE pkg_id = :pkgId", nativeQuery = true)
	public List<Itinerary_Master> findBypkgId(@Param("pkgId")int pkgId);
}