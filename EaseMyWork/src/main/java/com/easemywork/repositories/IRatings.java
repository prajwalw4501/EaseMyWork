/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.easemywork.pojos.Ratings;

/**
 * @author PrajwalW
 *
 */
public interface IRatings extends JpaRepository<Ratings, Long> {
	@Query(nativeQuery = true, value = ("select r.comments,r.rev_date,r.score from ratings r inner join employees e on(r.emp_emp_id=e.emp_id) where e.emp_id=?1"))
	Ratings revForEmp(Long id);

}
