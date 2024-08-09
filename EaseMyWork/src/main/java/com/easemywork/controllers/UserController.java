package com.easemywork.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Ratings;
import com.easemywork.services.IEmployeeService;
import com.easemywork.services.IRatingService;
import com.easemywork.services.IUserService;
import com.easmywork.dto.InsertRev;
import com.easmywork.dto.UpdateUserDTO;
import com.easmywork.dto.UsersDTO;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserController {
	public UserController() {
		System.out.println("in User UserController!");
	}

	@Autowired
	private IUserService usercontroller;
	@Autowired
	private IRatingService ratecontroller;
	@Autowired
	private IEmployeeService empcontroller;

// get details of users (done)
	@GetMapping("/details")
	public ResponseEntity<UsersDTO> showUser(@RequestParam Long id) {
		UsersDTO dto = usercontroller.findById(id);
		return new ResponseEntity<UsersDTO>(dto, HttpStatus.OK);
	}

//update User (done)
	@PutMapping("/edituser/{id}")
	public ResponseEntity<?> updateUser(@RequestParam Long id, @RequestBody UpdateUserDTO dto) {
		UpdateUserDTO u = usercontroller.updateUser(id, dto);
		return new ResponseEntity<UpdateUserDTO>(dto, HttpStatus.OK);
	}

//emp details acc to city (done)
	@GetMapping("/empbycity/")
	public ResponseEntity<List<Object[]>> allEmpByCity(@RequestParam String city) {
		List<Object[]> empByCities = empcontroller.getByCity(city);
		return new ResponseEntity<List<Object[]>>(empByCities, HttpStatus.OK);
	}

//post rating to employee
	@PostMapping("/rate")
	public ResponseEntity<Ratings> postReview(@RequestBody InsertRev rev) {
		Ratings r = ratecontroller.postCmnt(rev);
		return new ResponseEntity<Ratings>(r, HttpStatus.OK);
	}

}
