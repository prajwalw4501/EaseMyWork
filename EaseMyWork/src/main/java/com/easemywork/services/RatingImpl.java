package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.pojos.Ratings;
import com.easemywork.repositories.IRatings;

@Service
public class RatingImpl implements IRatingService {
	@Autowired
	private IRatings service;

	@Override
	public Ratings getCmntforEmp(Long Id) {
		Ratings forEmp = service.revForEmp(Id);
		return forEmp;
	}

}
