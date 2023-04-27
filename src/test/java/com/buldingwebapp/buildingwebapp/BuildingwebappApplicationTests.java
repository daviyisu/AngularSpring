package com.buldingwebapp.buildingwebapp;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class BuildingwebappApplicationTests {    //TODO Use Mockito in tests

	@Autowired
	private UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	Long createAndAddTestUser(){
		User user = new User("Test", "test@example.com");
		userRepository.save(user);
		return user.getId();
	}

	@Test
	void testUpdateUser(){
		Long idTest = createAndAddTestUser();
		Optional<User> optional_user = userRepository.findById(idTest);
		if (optional_user.isPresent()){
			User userToUpdate = optional_user.get();
			userToUpdate.setEmail("userupdated@gmail.com");
			userToUpdate.setName("Updated");
			userRepository.save(userToUpdate);
			optional_user = userRepository.findById(idTest);
			if (optional_user.isPresent()){
				Assertions.assertEquals("userupdated@gmail.com",optional_user.get().getEmail());
				Assertions.assertEquals("Updated",optional_user.get().getName());
			}
			userRepository.deleteById(idTest);
		}
	}

	@Test
	void testDeleteUser(){
		Long idTest = createAndAddTestUser();
		Optional<User> optional_user = userRepository.findById(idTest);
		optional_user.ifPresent(user -> userRepository.deleteById(user.getId()));
		optional_user = userRepository.findById(idTest);
		Assertions.assertTrue(optional_user.isEmpty());
	}

	@Test
	void testAddUser(){
		Long idTest = createAndAddTestUser();
		Optional<User> optional_user = userRepository.findById(idTest);
		Assertions.assertTrue(optional_user.isPresent());
		userRepository.deleteById(optional_user.get().getId());
	}
}
