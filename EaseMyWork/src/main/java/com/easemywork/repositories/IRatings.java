/**
 * 
 */
package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Ratings;

/**
 * @author PrajwalW
 *
 */
public interface IRatings extends JpaRepository<Ratings, Long> {

}
