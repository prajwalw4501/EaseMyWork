package com.easemywork.services;

import java.io.IOException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.pojos.Users;
import com.easemywork.repositories.IUsers;
import com.easmywork.dto.UsersDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserImpl implements IUserService {
	@Autowired
	private IUsers users;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UsersDTO addUser(UsersDTO user) throws IOException {
		Users userss = mapper.map(user, Users.class);
		Users perUser = users.save(userss);
		return user;

	}
}
