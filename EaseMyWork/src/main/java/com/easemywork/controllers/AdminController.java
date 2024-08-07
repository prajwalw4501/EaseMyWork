package com.easemywork.controllers;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	public AdminController() {
		System.out.println("In Admin Controller");
	}

	@PostMapping("/in")
	public ResponseEntity<?> loginAdmin(@RequestParam String email, String password) throws IOException {
		if (email.equals("admin@gmail.com") && password.equals("admin")) {
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

}
