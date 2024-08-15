//package com.easemywork.configs;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.lang.NonNull;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//import com.razorpay.RazorpayClient;
//
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//	 @Override
//	    public void addCorsMappings(@NonNull CorsRegistry registry) {
//	        registry.addMapping("/**") // Apply to all endpoints
//	                .allowedOrigins("http://localhost:3000") // Allow your frontend's origin
//	                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
//	                .allowedHeaders("*") // Allow all headers
//	                .allowCredentials(true); // Allow credentials (e.g., cookies)
//	    }
//	 
//	
//}
