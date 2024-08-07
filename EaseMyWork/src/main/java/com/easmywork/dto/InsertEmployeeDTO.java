package com.easmywork.dto;

import com.easemywork.pojos.Gender;
import com.easemywork.pojos.Type;

import lombok.Data;

@Data
public class InsertEmployeeDTO {
	private String first_name;
	private String last_name;
	private Long aadhar_no;
	private Long phone_no;
	private Gender gender;
	private Integer experience;
	private String city;
	private String state;
	private Integer pincode;
	private Type type;

}
