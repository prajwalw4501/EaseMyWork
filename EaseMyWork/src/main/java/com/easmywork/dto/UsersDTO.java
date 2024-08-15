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
	private String token;
	private Integer pincode;
	
	public UsersDTO(Long user_id, String first_name, String last_name, 
			String email, Role role,String token,String city,String state,Integer pincode) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.role = role;
		this.token=token;
		this.city=city;
		this.pincode=pincode;
		this.state=state;
	
	}
	
	

}
