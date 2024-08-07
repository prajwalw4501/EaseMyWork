package com.easemywork.services;

import java.io.IOException;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Location;
import com.easemywork.pojos.Role;
import com.easemywork.pojos.Users;
import com.easemywork.repositories.ILocation;
import com.easemywork.repositories.IUsers;
import com.easmywork.dto.Credentials;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UsersDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserImpl implements IUserService {
	@Autowired
	private IUsers userservice;
	@Autowired
	private ILocation locservice;

	@Autowired
	private ModelMapper mapper;

	@Override
	public Users addUser(InsertUserDTO user) throws IOException {
		Location l = new Location();
		l.setCity(user.getCity());
		l.setState(user.getState());
		l.setPincode(user.getPincode());
		Location perLoc = locservice.save(l);

		Users u = new Users();
		u.setFirst_name(user.getFirst_name());
		u.setLast_name(user.getLast_name());
		u.setEmail(user.getEmail());
		u.setPassword(user.getPassword());
		u.setRole(user.getRole());
		u.setLocation(perLoc);

		return userservice.save(u);
	}

	@Override
	public List<Object[]> getByStatus(String status) {
		List<Object[]> byStatus = userservice.getByBookStatus(status);
		return byStatus;
	}

	@Override
	public List<Users> getAllUsers() {
		List<Users> allUsers = userservice.findAll();
		return allUsers;
	}


	@Override
	public Users login(Credentials cred) {
		Users u = mapper.map(cred, Users.class);
		Users client_mail = userservice.findByEmail(u.getEmail());
		Users client_pass = userservice.findByPassword(u.getPassword());
		if (client_mail == null && client_pass == null) {
			if (u.getRole().equals(Role.ROLE_USER)) {
				return u;
			}
		}
		return null;
	}

	@Override
	public UsersDTO findById(Long id) {
		Users users = userservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid id!"));
		UsersDTO dto = mapper.map(users, UsersDTO.class);
		dto.setCity(users.getLocation().getCity());
		dto.setState(users.getLocation().getState());
		return dto;

	}

	@Override
	public List<Users> findRoleByMail(String mail) {
		// TODO Auto-generated method stub
		return null;
	}


}
/*
 * @Override public List<Object[]> getUserById(Long id) { Users users =
 * userservice.findById(id).orElseThrow(() -> new
 * ResourceNotFoundException("Invalid iD!!")); List<Object[]> allUsersById =
 * userservice.getDetailsByid(id); return allUsersById; }
 */
