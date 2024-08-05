package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.pojos.Users;
import com.easemywork.repositories.IUsers;

@Service
public class UserImpl implements IUserService {
	@Autowired
	IUsers users;

	@Override
	public void addUser(Users user) {
		users.save(user);
		return;
	}
}
