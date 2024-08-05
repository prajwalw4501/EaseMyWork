package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.IPayments;

@Service
public class PaymentImpl implements IPaymentService {
	@Autowired
	IPayments payments;

}
