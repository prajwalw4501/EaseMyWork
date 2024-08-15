package com.easemywork.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Location;
import com.easemywork.pojos.Role;
import com.easemywork.pojos.Users;
import com.easemywork.repositories.ILocation;
import com.easemywork.repositories.IUsers;
import com.easemywork.security.CustomUserDetails;
import com.easmywork.dto.InsertUserDTO;
import com.easmywork.dto.UpdateUserDTO;
import com.easmywork.dto.UsersDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserImpl implements IUserService, UserDetailsService {
	@Autowired
	private IUsers userservice;
	@Autowired
	private ILocation locservice;

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder encoder;

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
		u.setPassword(encoder.encode(user.getPassword()));
		u.setRole(Role.ROLE_USER);
		u.setLocation(perLoc);

		return userservice.save(u);
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// Optional<Users> u = userservice.findByEmail(email).orElseThrow(() -> new
		// UsernameNotFoundException("Invalid Email ID !!"));
		Users user = userservice.findByEmail(email);
		return new CustomUserDetails(user);
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
	public Users login(String mail, String pass) {
		Users user = userservice.findByEmail(mail);
		if (user != null ) {
			return user;
		} else {
			throw new RuntimeException("Invalid ID n Password!!");
		}

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

	@Override
	public UpdateUserDTO updateUser(Long id, UpdateUserDTO dto) {
		Users u = userservice.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		u.setFirst_name(dto.getFirst_name());
		u.setLast_name(dto.getLast_name());
		u.setEmail(dto.getEmail());
		userservice.save(u);
		return dto;
	}

	@Override
	public Users findByEmail(String mail) {
		// TODO Auto-generated method stub
		return userservice.findByEmail(mail);
	}

}
/*
 * @Override public List<Object[]> getUserById(Long id) { Users users =
 * userservice.findById(id).orElseThrow(() -> new
 * ResourceNotFoundException("Invalid iD!!")); List<Object[]> allUsersById =
 * userservice.getDetailsByid(id); return allUsersById; }
 */
