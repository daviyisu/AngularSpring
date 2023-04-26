package com.buldingwebapp.buildingwebapp;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.util.Optional;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class BuildingwebappApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	void contextLoads() {
	}
	@Test
	void testUpdateUser(){
		User user = new User("Test", "test@example.com");
		userRepository.save(user);
		Optional<User> optional_user = userRepository.findById(user.getId());
		if (optional_user.isPresent()){
			User userToUpdate = optional_user.get();
			userToUpdate.setEmail("userupdated@gmail.com");
			userToUpdate.setName("Updated");
			userRepository.save(userToUpdate);
			optional_user = userRepository.findById(user.getId());
			if (optional_user.isPresent()){
				Assertions.assertEquals("userupdated@gmail.com",optional_user.get().getEmail());
				Assertions.assertEquals("Updated",optional_user.get().getName());
			}
		}
	}
}
