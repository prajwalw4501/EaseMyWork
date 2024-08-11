package com.easemywork.pojos;

import lombok.Data;

@Data
public class Orders {
	private Long order_id;
	private String receipt;
	private String razorpay_id;
	private Double amount;
	private String currency;
}
