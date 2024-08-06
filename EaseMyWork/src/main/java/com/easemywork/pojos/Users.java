package com.easemywork.pojos;

import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "users")
public class Users extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column
	private Role role;
	/*
	 * @ManyToOne private Location location;
	 */
	/*
	 * @OneToMany(mappedBy = "user") private List<Bookings> bookings;
	 */
	/*
	 * @OneToMany(mappedBy = "user") private List<Ratings> ratings;
	 */

}
