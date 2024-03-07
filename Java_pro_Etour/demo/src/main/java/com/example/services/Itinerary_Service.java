package com.example.services;


import com.example.entity.Itinerary_Master;

import java.util.List;
import java.util.Optional;

public interface Itinerary_Service {
    void addItinerary(Itinerary_Master itineraryMaster);
    List<Itinerary_Master> getItineraryMasters();
    void delete(int itrId);
    //void update(Itinerary_Master itineraryMaster, int itrId);
    Optional<Itinerary_Master> getById(int itrId);
    List<Itinerary_Master> findBypkgId(int pkgId);
    List<Itinerary_Master> addItineraries(List<Itinerary_Master> itinary);
} 