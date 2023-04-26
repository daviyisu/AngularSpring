package com.buldingwebapp.buildingwebapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.stream.Stream;

@SpringBootApplication
@EnableJpaRepositories("com.buldingwebapp.buildingwebapp")
@EntityScan("com.buldingwebapp.buildingwebapp")
public class BuildingwebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuildingwebappApplication.class, args);
	}

}