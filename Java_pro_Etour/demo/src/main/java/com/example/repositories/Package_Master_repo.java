package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.entity.Package_Master;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface Package_Master_repo extends JpaRepository<Package_Master, Integer> {

	List<Package_Master> findBycatMasterId(int id);
//	@Modifying
//	@Query("update Package_Master p set p.pkg_name  = :pkg_name ,p.catmaster_id = :catmaster_id where p.pkg_id = :pkg_id")
//	void update(@Param("pkg_name") String pkg_name,@Param("catmaster_id") int catmaster_id,@Param("pkg_id")int id);
   
	List<Package_Master> findBypkgNameContainingIgnoreCase(String pkgName);
}