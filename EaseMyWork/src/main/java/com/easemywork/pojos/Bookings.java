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
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Bookings {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long book_id;
	@Column(nullable = false)
	private LocalDate start_date;
	@Column(nullable = false)
	private LocalDate end_date;

}
