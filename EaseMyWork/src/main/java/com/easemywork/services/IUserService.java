package com.easemywork.services;

import java.io.IOException;

import com.easemywork.pojos.Users;
import com.easmywork.dto.UsersDTO;

public interface IUserService {
	public UsersDTO addUser(UsersDTO user) throws IOException;
}
