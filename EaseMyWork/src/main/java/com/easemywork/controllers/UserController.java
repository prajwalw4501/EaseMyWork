package com.easemywork.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Ratings;
import com.easemywork.services.IBookingService;
import com.easemywork.services.IEmployeeService;
import com.easemywork.services.IRatingService;
import com.easemywork.services.IUserService;
import com.easmywork.dto.UpdateUserDTO;
import com.easmywork.dto.UsersDTO;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000/")
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
	@Autowired
	private IBookingService bookcontroller;

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
		return new ResponseEntity<UpdateUserDTO>(u, HttpStatus.OK);
	}

	@GetMapping("/empbycity/")
	public ResponseEntity<List<Object[]>> allEmpByCity(@RequestParam String city) {
		List<Object[]> empByCities = empcontroller.getByCity(city);
		System.out.println("city" + city);
		return new ResponseEntity<List<Object[]>>(empByCities, HttpStatus.OK);
	}

//post rating to employee
	@PostMapping("/rate")
	public ResponseEntity<Ratings> postReview(@RequestBody Map<String, Object> rate) {
		Ratings r = ratecontroller.postCmnt(rate);
		return new ResponseEntity<Ratings>(r, HttpStatus.OK);
	}

// all bookings
	@GetMapping("/bookings/{userid}")
	public ResponseEntity<List<Object[]>> allBookings(@PathVariable Long userid) {
		List<Object[]> allBooks = bookcontroller.allBookings(userid);
		return new ResponseEntity<List<Object[]>>(allBooks, HttpStatus.OK);
	}

}
