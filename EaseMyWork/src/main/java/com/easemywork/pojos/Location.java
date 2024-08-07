package com.easemywork.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long loc_id;
	@Column
	private String city;
	@Column
	private String state;
	@Column
	private Integer pincode;
	@Column
	private Double longitude;
	@Column
	private Double latitude;
	@OneToOne(mappedBy = "location")
	private Employees employees;
	@OneToOne(mappedBy = "location")
	private Users users;

}
