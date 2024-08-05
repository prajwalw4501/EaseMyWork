package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.IRatings;

@Service
public class RatingImpl implements IRatingService {
	@Autowired
	IRatings ratings;

}
