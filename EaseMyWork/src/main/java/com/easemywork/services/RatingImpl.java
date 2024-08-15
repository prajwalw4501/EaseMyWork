package com.easemywork.services;

import java.time.LocalDate;
import java.util.Map;

import org.apache.catalina.User;
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
	public Ratings postCmnt(Map<String, Object> rev) {
		System.out.println(rev+"employeees ratingss");
		String cmnt=rev.get("comment").toString();
		Integer score=Integer.parseInt(rev.get("score").toString());
		Long emp=Long.parseLong(rev.get("employeeId").toString());
		Long use=Long.parseLong(rev.get("user").toString());
		System.out.println(emp+"empppppiddd");
		System.out.println(use+"userrrr iddd");
		Employees e=empservice.findById(emp).orElseThrow();
		Users u=userservice.findById(use).orElseThrow();
		System.out.println(e+"EMPLOYEESS");
		System.out.println(u+"USERS");
		Ratings r=new Ratings();
		r.setComments(cmnt);
		r.setEmployees(e);
		r.setRev_date(LocalDate.now());
		r.setScore(score);
		r.setUser(u);
		 return rateservice.save(r);
		

	}

}
