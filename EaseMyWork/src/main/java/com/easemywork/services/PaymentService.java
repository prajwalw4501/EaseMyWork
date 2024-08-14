package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.BookingRepo;
import com.razorpay.RazorpayClient;

@Service
public class PaymentService {
@Autowired 
private RazorpayClient payclient;
@Autowired
private BookingRepo payservice;



}
