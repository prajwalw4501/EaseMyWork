package com.easemywork.services;

import java.util.List;
import java.util.Map;

import com.easemywork.pojos.Employees;
import com.easmywork.dto.EmployeesDTO;
import com.easmywork.dto.InsertEmployeeDTO;
import com.easmywork.dto.UpdateEmpDTO;

public interface IEmployeeService {
	public InsertEmployeeDTO addEmployee(InsertEmployeeDTO emp);

	public List<Object[]> allEmps();

	String deleteEmp(Long id);

	Employees updateEmployee(Long id, Map<String, Object> data);

	List<Object[]> sortByGender(String gender);

	List<Object[]> getByCity(String city);

	List<Object[]> getByType(String type);

	UpdateEmpDTO findById(Long id);
}
