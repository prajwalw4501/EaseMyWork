package com.easemywork.services;

import java.io.IOException;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Users;
import com.easemywork.repositories.IUsers;
import com.easmywork.dto.UsersDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserImpl implements IUserService {
	@Autowired
	private IUsers service;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UsersDTO addUser(UsersDTO user) throws IOException {
		Users userss = mapper.map(user, Users.class);
		Users perUser = service.save(userss);
		return user;

	}

	@Override
	public List<Object[]> getByStatus(String status) {
		List<Object[]> byStatus = service.getByBookStatus(status);
		return byStatus;
	}

	@Override
	public List<Users> getAllUsers() {
		List<Users> allUsers = service.findAll();
		return allUsers;
	}

	@Override
	public List<Object[]> getUserById(Long id) {
		Users users = service.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid iD!!"));
		List<Object[]> allUsersById = service.getDetailsByid(id);
		return allUsersById;
	}

}
