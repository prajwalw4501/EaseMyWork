package com.easemywork.services;

import com.easemywork.pojos.Ratings;
import com.easmywork.dto.InsertRev;

public interface IRatingService {
	Ratings getCmntforEmp(Long Id);
	Ratings postCmnt(InsertRev rev);
}
