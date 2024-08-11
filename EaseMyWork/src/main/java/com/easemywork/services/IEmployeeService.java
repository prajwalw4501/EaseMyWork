package com.easemywork.services;

import java.util.List;

import com.easemywork.pojos.Employees;
import com.easmywork.dto.EmployeesDTO;
import com.easmywork.dto.InsertEmployeeDTO;
import com.easmywork.dto.UpdateEmpDTO;

public interface IEmployeeService {
	public InsertEmployeeDTO addEmployee(InsertEmployeeDTO emp);

	public List<Object[]> allEmps();

	String deleteEmp(Long id);

	Employees updateEmployee(Long id, UpdateEmpDTO dto);

	List<Object[]> sortByGender(String gender);

	List<Object[]> getByCity(String city);

	List<Object[]> getByType(String type);

	UpdateEmpDTO findById(Long id);
}
