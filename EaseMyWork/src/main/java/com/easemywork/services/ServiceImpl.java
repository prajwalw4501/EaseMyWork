package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.IEmployees;
import com.easemywork.repositories.IServices;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ServiceImpl implements IOperatonsService {
	@Autowired
	private IServices serservice;
	@Autowired
	private IEmployees empservice;


}
