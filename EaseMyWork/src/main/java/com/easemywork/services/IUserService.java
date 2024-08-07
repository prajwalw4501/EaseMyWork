package com.easemywork.services;

import java.io.IOException;
import java.util.List;

import org.apache.catalina.User;

import com.easemywork.pojos.Users;
import com.easmywork.dto.Credentials;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UsersDTO;

public interface IUserService {
	Users addUser(InsertUserDTO user) throws IOException;

	List<Object[]> getByStatus(String status);

	List<Users> getAllUsers();


	Users login(Credentials cred);

	UsersDTO findById(Long id);
	List<Users> findRoleByMail(String mail);
}

//	List<Object[]> getUserById(Long id);