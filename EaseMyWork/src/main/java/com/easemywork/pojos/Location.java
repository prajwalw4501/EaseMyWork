package com.easemywork.pojos;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
	@OneToMany(mappedBy = "location")
	private List<Employees> employees;
	@OneToMany(mappedBy = "location")
	private List<Users> users;

}
