package com.easemywork.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Employees;
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
	public Employees addEmployee(InsertEmployeeDTO emp) {
		Location l = new Location();
		l.setCity(emp.getCity());
		l.setState(emp.getState());
		l.setPincode(emp.getPincode());
		Location perLoc = locservice.save(l);

		Services s = new Services();
		s.setType(emp.getType());

		Employees e = mapper.map(emp, Employees.class);
		s.setEmployees(e);
		e.setLocation(perLoc);
		if (emp.getType().equals(Type.BABYSITTER)) {
			s.setAmount(10000.0);
		}
		if (emp.getType().equals(Type.COOK)) {
			s.setAmount(2000.0);
		}
		if (emp.getType().equals(Type.MAID)) {
			s.setAmount(5000.0);
		}
		Services perSer = serservice.save(s);
		e.setServices(perSer);
		return empservice.save(e);

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
	public Employees updateEmployee(Long id, UpdateEmpDTO dto) {
		Employees e = empservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		e.setFirst_name(dto.getFirst_name());
		e.setLast_name(dto.getLast_name());
		e.setAadhar_no(dto.getAadhar_no());
		e.setExperience(dto.getExperience());
		e.setGender(dto.getGender());
		e.setPhone_no(dto.getPhone_no());

		return empservice.save(e);

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
	public EmployeesDTO findById(Long id) {
		Employees emp = empservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		EmployeesDTO dto = mapper.map(emp, EmployeesDTO.class);
		dto.setCity(emp.getLocation().getCity());
		dto.setState(emp.getLocation().getState());
		return dto;
	}
}
