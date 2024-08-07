package com.easemywork.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Users;
import com.easemywork.repositories.IUsers;
import com.easemywork.services.IUserService;
import com.easmywork.dto.InsertUserDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private IUserService authcontroller;
	@Autowired
	private IUsers service;

//login user
//	@PostMapping("/login")
//	ResponseEntity<?> loginUser(@RequestBody Credentials cred) throws IOException {
//		String uname = cred.getEmail();
//		Users email = service.findByEmail(uname);
//		String pass = cred.getPassword();
//		Users password = service.findByPassword(pass);
//		if (email != null) {
//			if (uname.equals(email.getEmail())) {
//				if (pass != null) {
//					if (pass.equals(password.getPassword())) {
//						List<Users> peruser = service.findRole(uname);
//						for (Users u : peruser) {
//							if (u.getRole().equals(Role.ROLE_USER))
//								return new ResponseEntity<Users>(u, HttpStatus.OK);
//						}
//					}
//				}
//			}
//		}
	//	return new ResponseEntity<Users>(HttpStatus.BAD_REQUEST);
//	}
//register user

	@PostMapping("/register")
	public ResponseEntity<Users> addUser(@Valid @RequestBody InsertUserDTO user) throws IOException {
		Users newUser = authcontroller.addUser(user);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	}
}
