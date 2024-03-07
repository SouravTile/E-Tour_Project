package com.example.services;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Package_Master;
import com.example.repositories.Package_Master_repo;

@Service
public class Package_Master_Impl implements Package_Services{
	
	@Autowired
	Package_Master_repo repo;
	
    @Override
	public void addPackage(Package_Master PackageMaster) {
		repo.save(PackageMaster);
	}

	@Override
	public List<Package_Master> getPackageMasters() {
		return repo.findAll();
	}

	@Override
	public void delete(int departureId) {
		repo.deleteById(departureId);
	}

	@Override
	public Optional<Package_Master> getById(int departureId) {
		
		return repo.findById(departureId);
	}

	@Override
	public void update(Package_Master PackageMaster, int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Package_Master> getByCatmaster(int id) {
		// TODO Auto-generated method stub
		return repo.findBycatMasterId(id);
	}

//	@Override
//	public void update(Package_Master pack, int id) {
//		repo.update(pack.getPkg_name(), pack.getCatmaster_id(),id);
//		
//	}
	
	@Override
	public List<Package_Master> searchPackagesByName(String packageName) {
        return repo.findBypkgNameContainingIgnoreCase(packageName);
	}

}