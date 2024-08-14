package com.easemywork.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.pojos.Employees;
import com.easemywork.pojos.Ratings;
import com.easemywork.pojos.Users;
import com.easemywork.services.IEmployeeService;
import com.easemywork.services.IOperatonsService;
import com.easemywork.services.IRatingService;
import com.easemywork.services.IUserService;
import com.easmywork.dto.EmployeesDTO;
import com.easmywork.dto.InsertEmployeeDTO;
import com.easmywork.dto.UpdateEmpDTO;

@RestController
@RequestMapping("/api/owner")
@CrossOrigin(origins = "http://localhost:3000")
public class OwnerController {

	public OwnerController() {
		System.out.println("In Owner Controller");
	}

	@Autowired
	private IEmployeeService empcontroller;
	@Autowired
	private IUserService usercontroller;
	@Autowired
	private IRatingService ratecontroller;
	@Autowired
	private IOperatonsService sercontroller;

//Add Employee with address(done)
	@PostMapping("/registeremp")
	public ResponseEntity<InsertEmployeeDTO> addEmployee(@RequestBody InsertEmployeeDTO emps) {
		InsertEmployeeDTO dto = empcontroller.addEmployee(emps);
		return new ResponseEntity<InsertEmployeeDTO>(dto, HttpStatus.CREATED);
	}

//Employees Details!!(done)
	@GetMapping("/allemps")
	public ResponseEntity<List<Object[]>> allEmployees() {
		List<Object[]> employees = empcontroller.allEmps();
		System.out.println("Employees!" + employees);
		return new ResponseEntity<List<Object[]>>(employees, HttpStatus.OK);

	}

//Delete Employee (done)
	@DeleteMapping("/deleteemp/{id}")
	public ResponseEntity<Employees> deleteEmployee(@PathVariable Long id) {
		empcontroller.deleteEmp(id);
		return new ResponseEntity<Employees>(HttpStatus.OK);
	}

//Update Employee Details (done)
	@PutMapping("/editemp/{id}")

	public ResponseEntity<?> editEmp(@PathVariable Long id, @RequestBody UpdateEmpDTO empdto) {
		System.out.println(empdto+"in Ownerrr Controllerrrrr!!");
		Employees e = empcontroller.updateEmployee(id, empdto);
		System.out.println(e+"dfdekfevuwebcjowegubcowlb");
		return new ResponseEntity<Employees>(e,HttpStatus.OK);
	}

// List acc to gender
	@GetMapping("/bygender/{gender}")
	public ResponseEntity<List<Object[]>> getByGender(@RequestParam String gender) {
		List<Object[]> sortedEmps = empcontroller.sortByGender(gender);
		return new ResponseEntity<List<Object[]>>(sortedEmps, HttpStatus.OK);
	}

// List acc to city
	@GetMapping("/listbycity/{city}")
	public ResponseEntity<List<Object[]>> getByCity(@RequestParam String city) {
		List<Object[]> sortedEmps = empcontroller.getByCity(city);
		return new ResponseEntity<List<Object[]>>(sortedEmps, HttpStatus.OK);
	}

// list acc to service type
	@GetMapping("/listbytype/{type}")
	public ResponseEntity<List<Object[]>> getByType(@RequestParam String type) {
		List<Object[]> sortedEmps = empcontroller.getByType(type);
		return new ResponseEntity<List<Object[]>>(sortedEmps, HttpStatus.OK);
	}

// get users by booking status
	@GetMapping("/listbystatus/{status}")
	public ResponseEntity<List<Object[]>> getByStatus(@RequestParam String status) {
		List<Object[]> sortedUser = usercontroller.getByStatus(status);
		return new ResponseEntity<List<Object[]>>(sortedUser, HttpStatus.OK);
	}

// get all users
	@GetMapping("/allusers")
	public ResponseEntity<List<Users>> getAllUsers() {
		List<Users> sortedUsers = usercontroller.getAllUsers();
		return new ResponseEntity<List<Users>>(sortedUsers, HttpStatus.OK);
	}


// get cmnts of emp
	@GetMapping("/cmntforemp/{id}")
	public ResponseEntity<Ratings> getCmntOfEmp(@RequestParam Long id) {
		Ratings rate = ratecontroller.getCmntforEmp(id);
		return new ResponseEntity<Ratings>(rate, HttpStatus.OK);
	}

// get emp by id
	@GetMapping("/empbyid/{id}")
	public ResponseEntity<UpdateEmpDTO> getEmpById(Long id) {
		UpdateEmpDTO dto = empcontroller.findById(id);
		return new ResponseEntity<UpdateEmpDTO>(dto, HttpStatus.OK);
	}


}
