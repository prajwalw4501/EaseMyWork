package com.easemywork.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Ratings;
import com.easemywork.services.IRatingService;
import com.easemywork.services.IUserService;
import com.easmywork.dto.InsertRev;
import com.easmywork.dto.UsersDTO;

@RestController
@RequestMapping("/api/user")
public class UserController {
	public UserController() {
		System.out.println("in User UserController!");
	}

	@Autowired
	private IUserService usercontroller;
	@Autowired
	private IRatingService ratecontroller;

// get details of users
	@GetMapping("/details")
	public ResponseEntity<UsersDTO> showUser(@RequestParam Long id) {
		UsersDTO dto = usercontroller.findById(id);
		return new ResponseEntity<UsersDTO>(dto, HttpStatus.OK);
	}

//post rating to employee
	@PostMapping("/rate")
	public ResponseEntity<Ratings> postReview(@RequestBody InsertRev rev) {
		Ratings r = ratecontroller.postCmnt(rev);
		return new ResponseEntity<Ratings>(r, HttpStatus.OK);
	}

}
