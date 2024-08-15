package com.easemywork;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.easemywork.repositories.IUsers;
import com.razorpay.RazorpayClient;

@SpringBootApplication
public class EaseMyWorkApplication /* implements CommandLineRunner */ {
	@Autowired
	private IUsers userrepo;

	public static void main(String[] args) {
		SpringApplication.run(EaseMyWorkApplication.class, args);
	}

	@Bean
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper;
	}
//
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	 @Bean
	 public RazorpayClient razorpayClient() throws Exception{
		 return new RazorpayClient("rzp_test_PoPCUX0so3eLSh", "ezJFXLNdCkhI1FIWwjPHykUI");
	 }
//
//	@Override
//	public void run(String... args) throws Exception {
////		File dir = new File(profilePictureFolderPath);
////		if (!dir.exists())
////			dir.mkdirs();
////		Role role1 = new Role();
//		Users users1 = new Users();
//		users1.setRole(Role.ROLE_OWNER);
////		role1.setRoleName(RoleEnum.ROLE_ADMIN);
////		Role role2 = new Role();
//		Users users2 = new Users();
//		users2.setRole(Role.ROLE_USER);
////		role2.setRoleName(RoleEnum.ROLE_USER);
//		Set<Users> roles = new HashSet<Users>();
//		roles.add(users1);
//		roles.add(users2);
//		for (Users role : roles) {
//			// Optional<Users> existingUser = roleRepo.findByRoleName(role.getRoleName());
//			Optional<Users> existingUser = userrepo.findByRole(role.getRole());
//
//			if (existingUser.isEmpty()) {
//				// If the user doesn't exist, insert them
//				userrepo.save(role);
//			}
//		}
//	}
}
