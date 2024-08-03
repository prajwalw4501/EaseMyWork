package com.easemywork.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private long service_id;
	@Enumerated(EnumType.STRING)
	@Column
	private Type serv_type;
	@Column(nullable = false)
	private double amount;
}
