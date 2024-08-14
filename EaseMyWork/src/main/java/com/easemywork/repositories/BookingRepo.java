/**
 * 
 */
package com.easemywork.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.easemywork.pojos.Bookings;

/**
 * @author PrajwalW
 *
 */
public interface BookingRepo extends JpaRepository<Bookings, Long> {
	@Query
	(nativeQuery = true,value = "select * from bookings b where b.razorpay_id=?1")
	Bookings findByrazorpay_id(String razor);
	
	@Query
	(nativeQuery = true,value = "select b.book_id,b.razorpay_id,e.first_name,e.last_name,"
			+ "e.phone_no,b.amount from bookings b inner join employees e on(e.emp_id=b.emp_id)"
			+ " where b.status =\"booked\" and b.user_id=?1")
	List<Object[]> userBookings(Long userid);

}
