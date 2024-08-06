package com.easemywork.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "services")
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long service_id;
	@Enumerated(EnumType.STRING)
	@Column
	private Type type;
	@Column(nullable = false)
	private Double amount;
	@OneToOne
	private Employees employees;

}
