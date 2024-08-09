package com.easmywork.dto;

import com.easemywork.pojos.Role;

import lombok.Data;

@Data
public class UsersDTO {
	private Long user_id;
	private String first_name;
	private String last_name;
	private String email;
	private String password;
	private Role role;
	private String city;
	private String state;

}