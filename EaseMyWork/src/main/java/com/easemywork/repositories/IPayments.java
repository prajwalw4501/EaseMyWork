/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Payments;

/**
 * @author PrajwalW
 *
 */
public interface IPayments extends JpaRepository<Payments, Long> {

}
