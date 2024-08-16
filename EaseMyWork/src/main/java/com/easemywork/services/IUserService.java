package com.easemywork.services;

import java.io.IOException;
import java.util.List;

import com.easemywork.pojos.Users;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UpdateUserDTO;
import com.easmywork.dto.UsersDTO;

public interface IUserService {
	Users addUser(InsertUserDTO user) throws IOException;

	UpdateUserDTO updateUser(Long id, UpdateUserDTO dto);

	List<Object[]> getByStatus(String status);

	List<Object[]> getAllUsers();

	Users findByEmail(String mail);

	Users login(String mail, String pass);

	UsersDTO findById(Long id);

	List<Users> findRoleByMail(String mail);

	void deleteUser(Long id);
}

//	List<Object[]> getUserById(Long id);