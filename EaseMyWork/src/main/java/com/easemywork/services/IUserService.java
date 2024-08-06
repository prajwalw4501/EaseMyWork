package com.easemywork.services;

import java.io.IOException;
import java.util.List;

import com.easemywork.pojos.Users;
import com.easmywork.dto.UsersDTO;

public interface IUserService {
	public UsersDTO addUser(UsersDTO user) throws IOException;

	List<Object[]> getByStatus(String status);

	List<Users> getAllUsers();

	List<Object[]> getUserById(Long id);
}
