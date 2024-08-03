package com.easemywork.pojos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Payments {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long pay_id;
	@Column(nullable = false)
	private double advance_amnt;
	@Column(nullable = false)
	private double final_amnt;
	@Column(nullable = false)
	private LocalDate pay_date;

}
