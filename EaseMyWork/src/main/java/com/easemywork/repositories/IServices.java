/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Services;

/**
 * @author PrajwalW
 *
 */
public interface IServices extends JpaRepository<Services, Long> {

}
