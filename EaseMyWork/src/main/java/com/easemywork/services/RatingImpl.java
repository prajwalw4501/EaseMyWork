package com.easemywork.services;

import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Employees;
import com.easemywork.pojos.Ratings;
import com.easemywork.pojos.Users;
import com.easemywork.repositories.IEmployees;
import com.easemywork.repositories.IRatings;
import com.easemywork.repositories.IUsers;

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
	public List<Object[]> getCmntforEmp(Long Id) {
		System.out.println("employee id"+Id);
		Employees e =empservice.findById(Id).orElseThrow(()-> new ResourceNotFoundException("Invalid ID"));
		List<Object[]> r=rateservice.findRatingsByEmployees(Id);
		return r;
		
	}

	@Override
	public Ratings postCmnt(Map<String, Object> rev) {
		System.out.println(rev+"employeees ratingss");
		Long empid=Long.parseLong(rev.get("employeeId").toString());
		Long useid=Long.parseLong(rev.get("user").toString());
		String comm=rev.get("comment").toString();
		Integer score=Integer.parseInt(rev.get("score").toString());
		Employees e=empservice.findById(empid).orElseThrow(()-> new ResourceNotFoundException("Invalid Emp ID"));
		Users u=userservice.findById(useid).orElseThrow(()-> new ResourceNotFoundException("Invalid User id"));
		Ratings r=new Ratings();
		r.setComments(comm);
		r.setEmployees(e);
		r.setUser(u);
		r.setScore(score);
	return	rateservice.save(r);
		
	}
	

}
