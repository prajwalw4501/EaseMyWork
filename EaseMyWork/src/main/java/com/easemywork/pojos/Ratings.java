package com.easemywork.pojos;

import java.time.LocalDate;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rev_id;
	@Column
	private Integer score;
	@Column
	private String comments;
	@UpdateTimestamp
	private LocalDate rev_date;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;
	@ManyToOne
	@JoinColumn(name = "emp_id")
	private Employees employees;

}
