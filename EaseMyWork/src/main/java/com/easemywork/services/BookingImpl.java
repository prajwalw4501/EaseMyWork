package com.easemywork.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easemywork.repositories.BookingRepo;

@Service
public class BookingImpl implements IBookingService {
	@Autowired
	private BookingRepo booking;

	@Override
	public List<Object[]> allBookings(Long id) {
		List<Object[]> userBookings = booking.userBookings(id);

		return userBookings;
	}

}
