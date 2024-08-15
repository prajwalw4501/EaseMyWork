package com.easemywork.services;

import java.util.List;
import java.util.Map;

import com.easemywork.pojos.Ratings;

public interface IRatingService {
	List<Object[]>  getCmntforEmp(Long Id);
	Ratings postCmnt(Map<String, Object> rev);
}
