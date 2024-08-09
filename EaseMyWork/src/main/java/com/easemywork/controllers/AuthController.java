package com.easemywork.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Users;
import com.easemywork.repositories.IUsers;
import com.easemywork.services.IUserService;
import com.easmywork.dto.Credentials;
import com.easmywork.dto.InsertUserDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class AuthController {
	@Autowired
	private IUserService authcontroller;
	@Autowired
	private IUsers service;

//login user
@PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody Credentials cred){
Users u=	authcontroller.login(cred);
if(u==null) {
	return new ResponseEntity<>(HttpStatus.FORBIDDEN);
}
return new ResponseEntity<>(HttpStatus.OK);

	
}
//register user

	@PostMapping("/signup")
	public ResponseEntity<Users> addUser(@Valid @RequestBody InsertUserDTO user) throws IOException {
		return new ResponseEntity<>(authcontroller.addUser(user), HttpStatus.CREATED);
	}
}
