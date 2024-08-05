package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.IEmployees;

@Service
public class EmployeeImpl implements IEmployeeService {
	@Autowired
	IEmployees employees;

}
