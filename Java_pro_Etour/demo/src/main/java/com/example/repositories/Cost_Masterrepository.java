package com.example.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entity.Cost_Master;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface Cost_Masterrepository extends JpaRepository<Cost_Master,Integer> {
//@Modifying
//	@Query("UPDATE Cost_Master c SET c.cost = :cost, c.single_prsn_cost = :single_prsn_cost, c.extra_prsn_cost = :extra_prsn_cost, c.child_wth_bed = :child_wth_bed, c.child_wto_bed = :child_wto_bed, c.valid_from = :valid_from, c.valid_to = :valid_to, c.catmaster_id = :catmaster_id WHERE c.cost_id = :cost_id")
//	  public void update(@Param("cost") int cost, @Param("single_prsn_cost") int single_prsn_cost, @Param("extra_prsn_cost") int extra_prsn_cost, @Param("child_wth_bed") int child_wth_bed, @Param("child_wto_bed") int child_wto_bed, @Param("valid_from") Date valid_from, @Param("valid_to") Date valid_to, @Param("catmaster_id") int catmaster_id, @Param("cost_id") int id);
	
	@Modifying
	@Query(value = "SELECT * FROM Cost_Master WHERE pkg_id = :pkgId", nativeQuery = true)
		public List<Cost_Master> findBypkgId(@Param("pkgId")int pkgId);
		
		List<Cost_Master> findByCostLessThanEqual(int cost);
}