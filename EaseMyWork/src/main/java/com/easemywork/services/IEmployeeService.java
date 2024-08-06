package com.easemywork.services;

import java.util.List;

import com.easemywork.pojos.Employees;
import com.easmywork.dto.EmployeesDTO;

public interface IEmployeeService {
	public Employees addEmployee(Employees emp);

	public List<Object[]> allEmps();

	String deleteEmp(Long id);

	String updateEmployee(Long id, EmployeesDTO dto);

	List<Object[]> sortByGender(String gender);

	List<Object[]> getByCity(String city);

	List<Object[]> getByType(String type);
}
