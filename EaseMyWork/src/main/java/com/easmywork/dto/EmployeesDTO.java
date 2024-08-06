package com.easmywork.dto;

import com.easemywork.pojos.Gender;

import lombok.Data;

@Data
public class EmployeesDTO {
	private String first_name;
	private String last_name;
	private Long aadhar_no;
	private Integer experience;
	private Gender gender;
	private Long phone_no;

}
