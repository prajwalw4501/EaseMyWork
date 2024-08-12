/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Bookings;

/**
 * @author PrajwalW
 *
 */
public interface IBookings extends JpaRepository<Bookings, Long> {

}
