package com.easemywork.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.easemywork.pojos.Users;

@Repository
public interface IUsers extends JpaRepository<Users, Long> {

}
