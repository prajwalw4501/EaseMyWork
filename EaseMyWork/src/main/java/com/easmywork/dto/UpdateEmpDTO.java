package com.easmywork.dto;

import com.easemywork.pojos.Gender;

import lombok.Data;

@Data
public class UpdateEmpDTO {

	private String first_name;
	private String last_name;
	private Integer experience;
	private Gender gender;
	private Long phone_no;
	private Long aadhar_no;
}
