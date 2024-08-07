package com.easemywork.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.pojos.Ratings;
import com.easemywork.repositories.IEmployees;
import com.easemywork.repositories.IRatings;
import com.easemywork.repositories.IUsers;
import com.easmywork.dto.InsertRev;

@Service
public class RatingImpl implements IRatingService {
	@Autowired
	private IRatings rateservice;
	@Autowired
	private IUsers userservice;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private IEmployees empservice;

	@Override
	public Ratings getCmntforEmp(Long Id) {
		Ratings forEmp = rateservice.revForEmp(Id);
		return forEmp;
	}

	@Override
	public Ratings postCmnt(InsertRev rev) {
		Ratings r = mapper.map(rev, Ratings.class);
		return rateservice.save(r);

	}

}
