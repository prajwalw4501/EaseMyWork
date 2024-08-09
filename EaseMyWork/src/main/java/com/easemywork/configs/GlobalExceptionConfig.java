//package com.easemywork.configs;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
////import org.springframework.web.ErrorResponse;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.context.request.WebRequest;
//
//import com.easmywork.dto.ErrorResponse;
//
//@ControllerAdvice
//public class GlobalExceptionConfig {
//	// Handle other exceptions
//	@ExceptionHandler(Exception.class)
//	public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex, WebRequest request) {
//		ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage());
//		return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
//	}
//}