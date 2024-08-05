package com.easemywork.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.IBookings;

@Service
public class BookingImpl implements IBookingService {
	@Autowired
	IBookings booking;

}
