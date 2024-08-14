package com.easemywork.controllers;

import java.time.LocalDate;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.easemywork.exceptions.ResourceNotFoundException;
import com.easemywork.pojos.Bookings;
import com.easemywork.pojos.Employees;
import com.easemywork.pojos.Payments;
import com.easemywork.pojos.Status;
import com.easemywork.pojos.Users;
import com.easemywork.repositories.BookingRepo;
import com.easemywork.repositories.IEmployees;
import com.easemywork.repositories.IPayments;
import com.easemywork.repositories.IUsers;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/pay")
public class PaymentController {
	@Autowired
	private BookingRepo bookcontroller;
	@Autowired
	private IUsers usercontroller;
	@Autowired
	private IEmployees empcontroller;
	@Autowired
	private IPayments paycontroller;

	@PostMapping("/createorder")
	@ResponseBody
	public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println(data + "asccewcwe");
//		Object obj=data.get("amount");

		Double amt = Double.parseDouble(data.get("amount").toString());

		var client = new RazorpayClient("rzp_test_PoPCUX0so3eLSh", "ezJFXLNdCkhI1FIWwjPHykUI");
		JSONObject ob = new JSONObject();
		ob.put("amount", amt * 100);
		ob.put("currency", "INR");
		ob.put("receipt", "txn_1235468");

		Order order = client.orders.create(ob);
		System.out.println(order + "dwqdqwd");
		System.out.println("data!!");
		Bookings book = new Bookings();
		book.setAmount(Double.parseDouble(data.get("amount").toString()));
		book.setEnd_date(LocalDate.parse(data.get("enddate").toString()));
		book.setStart_date(LocalDate.parse(data.get("startDate").toString()));
		book.setStatus(Status.PENDING);
		book.setRazorpay_id(order.get("id").toString());
		Employees e = empcontroller.findById(Long.parseLong(data.get("empid").toString()))
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Emp ID"));
		Users u = usercontroller.findById(Long.parseLong(data.get("userid").toString()))
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
		book.setEmployees(e);
		book.setUsers(u);
		this.bookcontroller.save(book);

		return order.toString();
	}

	@PostMapping("/updatepay")
	@ResponseBody
	public String updatePayment(@RequestBody Map<String, Object> paydata) {
		System.out.println(paydata + "sas");
		try {
			String orderid = paydata.get("order_id").toString();
			//String razorpayPaymentId = paydata.get("payment_id").toString();
			//String signature = paydata.get("signature").toString();

			Bookings bookings = bookcontroller.findByrazorpay_id(orderid);
			bookings.setStatus(Status.BOOKED);
			Payments payment = new Payments();
			Users u = usercontroller.findById(Long.parseLong(paydata.get("userid").toString()))
					.orElseThrow(() -> new ResourceNotFoundException("Invalid User ID"));
			payment.setAdvance_amnt(bookings.getAmount());
			payment.setFinal_amnt(bookings.getAmount());
			payment.setUsers(u);
			bookings.setPayments(payment);
			paycontroller.save(payment);
			bookcontroller.save(bookings);
			Employees e=new Employees();
			
			return "Payment updated Succesfully!!";

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println();

			return "Payment Update Failed!!";
		}

	}

}
