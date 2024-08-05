package com.easemywork.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Users;
import com.easemywork.services.IUserService;
import com.easemywork.services.UserImpl;
import com.easmywork.dto.UsersDTO;

import jakarta.validation.Valid;
import lombok.val;

@RestController
@RequestMapping("/api")
public class UserController {
	public UserController() {
		System.out.println("in User UserController!");
	}

	@Autowired
	private IUserService iUserService;

	@PostMapping("/register")
	public ResponseEntity<?> addUser(@Valid @RequestBody UsersDTO user) throws IOException {
		UsersDTO newUser = iUserService.addUser(user);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	}

}
