package com.easemywork.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.services.UserImpl;

@RestController
@RequestMapping("/api/easemywork")
public class UserController {
	@Autowired
	UserImpl user;
	

}
