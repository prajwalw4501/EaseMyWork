package com.easemywork.controllers;

import java.io.IOException;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Users;
import com.easemywork.services.IUserService;
import com.easmywork.dto.Credentials;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UsersDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
	@Autowired
	private IUserService authcontroller;

	// login user
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Credentials cred) {
		try {
			Users u = authcontroller.login(cred.getEmail(), cred.getPassword());
			UsersDTO dto=new UsersDTO(u.getUser_id(), u.getFirst_name(),u.getLast_name(), u.getEmail(), u.getRole());
			return new ResponseEntity<UsersDTO>(dto, HttpStatus.OK);
		} catch (RuntimeException e) {
			return new ResponseEntity<String>("Invalid email or password", HttpStatus.UNAUTHORIZED);
		}
	}

//register user

	@PostMapping("/signup")
	public ResponseEntity<Users> addUser(@Valid @RequestBody InsertUserDTO user) throws IOException {
		return new ResponseEntity<>(authcontroller.addUser(user), HttpStatus.CREATED);
	}
}
