package com.easemywork.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Employees;
import com.easemywork.pojos.Gender;
import com.easemywork.pojos.Location;
import com.easemywork.pojos.Services;
import com.easemywork.pojos.Type;
import com.easemywork.repositories.IEmployees;
import com.easemywork.repositories.ILocation;
import com.easemywork.repositories.IServices;
import com.easmywork.dto.EmployeesDTO;
import com.easmywork.dto.InsertEmployeeDTO;
import com.easmywork.dto.UpdateEmpDTO;

@Service
@Transactional
public class EmployeeImpl implements IEmployeeService {
	@Autowired
	private IEmployees empservice;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private ILocation locservice;
	@Autowired
	private IServices serservice;

	@Override
	public InsertEmployeeDTO addEmployee(InsertEmployeeDTO emp) {

		Location l = new Location();
		l.setCity(emp.getCity());
		l.setState(emp.getState());
		l.setPincode(emp.getPincode());
		Location perLoc = locservice.save(l);

		Services s = new Services();
		s.setType(emp.getType());
		if (emp.getType().equals(Type.BABYSITTER)) {
			s.setAmount(7000.0);
		} else if (emp.getType().equals(Type.COOK)) {
			s.setAmount(5000.0);
		}
		s.setAmount(2000.0);
		Services perSer = serservice.save(s);
		Employees e = new Employees();
		e.setFirst_name(emp.getFirst_name());
		e.setLast_name(emp.getLast_name());
		e.setAadhar_no(emp.getAadhar_no());
		e.setPhone_no(emp.getPhone_no());
		e.setGender(emp.getGender());
		e.setExperience(emp.getExperience());
		e.setLocation(perLoc);
		e.setServices(perSer);
		empservice.save(e);
		return emp;
	}

	@Override
	public List<Object[]> allEmps() {

		List<Object[]> employee = empservice.getAllEmps();
		return employee;
	}

	@Override
	public String deleteEmp(Long id) {
		Employees e = empservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid"));
		empservice.delete(e);
		return "Deleted!";
	}

	@Override
	public UpdateEmpDTO updateEmployee(Long id, UpdateEmpDTO data) {
		System.out.println("Emp id is:" + id + "              " + data);
		Employees e = empservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		e.setAadhar_no(data.getAadhar_no());
		e.setExperience(data.getExperience());
		e.setFirst_name(data.getFirst_name());
		e.setGender(data.getGender());
		e.setLast_name(data.getLast_name());
		e.setPhone_no(data.getPhone_no());
		empservice.save(e);
		return data;
	}

	@Override
	public List<Object[]> sortByGender(String gender) {
		List<Object[]> sortByGender = empservice.sortByGender(gender);
		return sortByGender;
	}

	@Override
	public List<Object[]> getByCity(String city) {
		List<Object[]> sortByCity = empservice.getEmpByCity(city);
		return sortByCity;
	}

	@Override
	public List<Object[]> getByType(String type) {
		List<Object[]> sortByType = empservice.getByType(type);
		return sortByType;
	}

	@Override
	public UpdateEmpDTO findById(Long id) {
		Employees emp = empservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		UpdateEmpDTO dto = mapper.map(emp, UpdateEmpDTO.class);
		// dto.setCity(emp.getLocation().getCity());
		// dto.setState(emp.getLocation().getState());
		return dto;
	}
}
