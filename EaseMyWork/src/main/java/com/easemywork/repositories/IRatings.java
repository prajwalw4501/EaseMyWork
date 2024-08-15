/**
 * 
 */
package com.easemywork.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.easemywork.pojos.Ratings;

/**
 * @author PrajwalW
 *
 */
public interface IRatings extends JpaRepository<Ratings, Long> {
	@Query(nativeQuery = true, value = "select r.rev_id,r.comments,r.score,u.first_name from ratings r inner join employees e on (r.emp_id=e.emp_id) inner join users u on(r.user_id=u.user_id) where e.emp_id=?1")
	List<Object[]> findRatingsByEmployees(Long emp_id);

}
