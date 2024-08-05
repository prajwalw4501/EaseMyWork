/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Employees;

/**
 * @author PrajwalW
 *
 */
public interface IEmployees extends JpaRepository<Employees, Long> {

}
