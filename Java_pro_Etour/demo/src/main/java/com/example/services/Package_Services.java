package com.example.services;
import java.util.List;
import java.util.Optional;
import com.example.entity.Package_Master;


public interface Package_Services {
		public void addPackage(Package_Master PackageMaster);
	    List<Package_Master> getPackageMasters();
	    void delete(int departureId);
	    void update(Package_Master PackageMaster, int id);
	    Optional<Package_Master> getById(int id);
	    List<Package_Master> getByCatmaster(int id);
	    public List<Package_Master> searchPackagesByName(String packageName);
}