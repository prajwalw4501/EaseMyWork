package com.easemywork.pojos;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
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
@MappedSuperclass
public class BaseEntity {
	@Column(nullable = false)
	private String first_name;
	@Column(nullable = false)
	private String last_name;
	@CreationTimestamp
	@Column
	private LocalDate created_date;
	@UpdateTimestamp
	@Column
	private LocalDate updated_date;

}
