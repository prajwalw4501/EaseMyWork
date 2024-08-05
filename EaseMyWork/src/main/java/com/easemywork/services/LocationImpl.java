package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.ILocation;

@Service
public class LocationImpl implements ILocationService {
	@Autowired
	ILocation location;

}
