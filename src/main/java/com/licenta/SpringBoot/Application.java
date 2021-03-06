package com.licenta.SpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication(scanBasePackages={"com.licenta"})
public class Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		System.out.println("---------------------- -------------------------------------");
		System.out.println("---------------------- Spring Aplication -------------------");
		System.out.println("---------------------Licenta@BiancaGolea -------------------");
		System.out.println("---------------------------------------- -------------------");
		System.out.println("---------------------- ----------------- -------------------");
	}
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/login").allowedOrigins("http://localhost:3000");
            }
        };
    }
}
