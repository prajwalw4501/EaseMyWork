package com.easemywork.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.easemywork.pojos.Employees;
import com.easemywork.repositories.IEmployees;
import com.easmywork.dto.EmployeesDTO;

@Service
@Transactional
public class EmployeeImpl implements IEmployeeService {
	@Autowired
	private IEmployees service;
	@Autowired
	private ModelMapper mapper;

	@Override
	public Employees addEmployee(Employees emp) {
		// Employees employee = mapper.map(emp, Employees.class);
		Employees perEmp = service.save(emp);
		return perEmp;
	}

	@Override
	public List<Object[]> allEmps() {

		List<Object[]> employee = service.getAllEmps();
		return employee;
	}

	@Override
	public String deleteEmp(Long id) {
		if (service.existsById(id)) {
			service.deleteById(id);
			return "Employee Details deleted!!";
		}
		return ("Id Not Found!!");
	}

	@Override
	public String updateEmployee(Long id, EmployeesDTO dto) {
		Employees emp = service.findById(id).orElseThrow();
		emp.setAadhar_no(dto.getAadhar_no());
		emp.setFirst_name(dto.getFirst_name());
		emp.setExperience(dto.getExperience());
		emp.setGender(dto.getGender());
		emp.setLast_name(dto.getLast_name());
		emp.setPhone_no(dto.getPhone_no());
		service.save(emp);
		return "Employee Updatedd!";

	}

	@Override
	public List<Object[]> sortByGender(String gender) {
		List<Object[]> sortByGender = service.sortByGender(gender);
		return sortByGender;
	}

	@Override
	public List<Object[]> getByCity(String city) {
		List<Object[]> sortByCity = service.getEmpByCity(city);
		return sortByCity;
	}

	@Override
	public List<Object[]> getByType(String type) {
		List<Object[]> sortByType = service.getByType(type);
		return sortByType;
	}
}
