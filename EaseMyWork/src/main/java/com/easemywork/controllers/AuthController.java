package com.easemywork.controllers;

import java.io.IOException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Users;
import com.easemywork.security.CustomUserDetails;
import com.easemywork.security.JWTUtils;
import com.easemywork.services.IUserService;
import com.easmywork.dto.AuthResponse;
import com.easmywork.dto.Credentials;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UsersDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(originPatterns = "http://localhost:3000/")
//@CrossOrigin(origins = "http://localhost:3000/auth")
public class AuthController {
	@Autowired
	private IUserService authcontroller;
	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private JWTUtils utils;

	// login user
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Credentials cred) {
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(cred.getEmail(),
				cred.getPassword());
		Authentication authenticationDetails = authManager.authenticate(authToken);
		CustomUserDetails customUserDetails = (CustomUserDetails) authenticationDetails.getPrincipal();
		// Users user = customUserDetails.getUser();
		var roleList = authenticationDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.toSet());
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwtToken(utils.generateJwtToken(authenticationDetails));
		authResponse.setMessage("Authentication Successfull !!");

		try {
			Users u = authcontroller.login(cred.getEmail(), cred.getPassword());
			UsersDTO dto = new UsersDTO(u.getUser_id(), u.getFirst_name(), u.getLast_name(), u.getEmail(), u.getRole(),
					authResponse.getJwtToken(),u.getLocation().getCity(),u.getLocation().getState(),u.getLocation().getPincode());
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
