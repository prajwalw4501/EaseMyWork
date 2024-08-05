package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.easemywork.pojos.Users;

public interface IUsers extends JpaRepository<Users, Long> {
	

}
