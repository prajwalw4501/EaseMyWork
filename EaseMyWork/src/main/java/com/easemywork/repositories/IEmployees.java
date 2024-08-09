/**
 * 
 */
package com.easemywork.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.easemywork.pojos.Employees;

@Repository
public interface IEmployees extends JpaRepository<Employees, Long> {
	@Query(nativeQuery = true, value = "select e.emp_id,e.first_name,e.last_name,"
			+ "e.experience,e.gender,e.phone_no,l.city,l.state,s.type from employees e "
			+ "join location l on(e.loc_id=l.loc_id) join services s on(e.service_id=s.service_id)")
	List<Object[]> getAllEmps();

	@Query(nativeQuery = true,value = "select e.emp_id,e.first_name,e.last_name,e.experience,e.gender,e.phone_no,l.city,l.state,s.type "
			+ "from employees e inner join location l on(e.emp_id=l.employees_emp_id)inner join services s on(e.emp_id=s.employees_emp_id) where e.gender=?1")
	List<Object[]> sortByGender(String gender);
	
	@Query
	(nativeQuery = true,value = "select e.emp_id,e.first_name,e.last_name,e.experience,e.gender,l.city,s.type,s.amount from employees e inner join location l on(e.loc_id=l.loc_id)inner join services s on(e.service_id=s.service_id) where l.city=?1")
	List<Object[]> getEmpByCity(String city);
	
	@Query
	(nativeQuery = true,value = "select e.emp_id,e.first_name,e.last_name,e.experience,e.gender,e.phone_no,l.city,l.state,s.type from employees e inner join location l on(e.emp_id=l.employees_emp_id)inner join services s on(e.emp_id=s.employees_emp_id) where s.type=?1")
	List<Object[]> getByType(String type);
	
	

}
