package com.easemywork.pojos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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

	@Enumerated(EnumType.STRING)
	@Column
	private Gender gender;
	@Column(nullable = false)
	private Integer experience;
	@Lob
	private byte[] image;

	/*
	 * @OneToOne(mappedBy = "employees") private List<Loca>
	 */
	/*
	 * @ManyToOne private Services services;
	 */
	/*
	 * @OneToMany(mappedBy = "emp", fetch = FetchType.EAGER) private List<Bookings>
	 * bookings;
	 */
	/*
	 * @OneToMany(mappedBy = "emp",fetch = FetchType.EAGER) private List<Ratings>
	 * ratings;
	 */
//	@JoinTable(
//		      name = "user_role", 
//		      joinColumns = @JoinColumn(name = "user_id"), 
//		      inverseJoinColumns = @JoinColumn(name = "role_id"))
	public Employees(String first_name, String last_name, Long aadhar_no, Long phone_no, Gender gender,
			Integer experience) {
		super();
		this.aadhar_no = aadhar_no;
		this.phone_no = phone_no;
		this.gender = gender;
		this.experience = experience;
	}

}
