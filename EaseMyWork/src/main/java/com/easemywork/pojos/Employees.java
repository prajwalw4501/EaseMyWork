package com.easemywork.pojos;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
@Table(name = "employees")
public class Employees extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long emp_id;
	@Column(nullable = false, unique = true)
	private Long aadhar_no;
	@Column(nullable = false, unique = true)
	private Long phone_no;
	@ManyToOne
	private Location location;
	@Enumerated(EnumType.STRING)
	@Column
	private Gender gender;
	@Column(nullable = false)
	private Integer experience;
	@Lob
	private byte[] image;
	@ManyToOne
	private Services services;
	@OneToMany(mappedBy = "emp")
	private List<Bookings> bookings;
	@OneToMany(mappedBy = "emp")
	private List<Ratings> ratings;

}
