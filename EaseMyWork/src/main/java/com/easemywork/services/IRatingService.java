package com.easemywork.services;

import java.util.Map;

import com.easemywork.pojos.Ratings;
import com.easmywork.dto.InsertRev;

public interface IRatingService {
	Ratings getCmntforEmp(Long Id);
	Ratings postCmnt(Map<String, Object> rev);
}
