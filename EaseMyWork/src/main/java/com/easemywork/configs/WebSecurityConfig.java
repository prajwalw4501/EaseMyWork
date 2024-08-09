//package com.easemywork.configs;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
////import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
////import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import com.easemywork.security.JWTRequestFilter;
//
//@SuppressWarnings("deprecation")
//@EnableWebSecurity // mandatory
//@Configuration // mandatory
//@EnableMethodSecurity
//public class WebSecurityConfig {
//
//	@Autowired
//	private JWTRequestFilter filter;
//	@Autowired
//	private UserDetailsService userDetailsService;
//
//	@Bean
//	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.cors().and().csrf().disable().authorizeRequests().anyRequest().authenticated().and().sessionManagement()
//				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//				.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//		return http.build();
//	}
//
//	// configure auth mgr bean : to be used in Authentication REST controller
//	@Bean
//	public AuthenticationManager authenticatonManager(AuthenticationConfiguration config) throws Exception {
//		return config.getAuthenticationManager();
//	}
//}
