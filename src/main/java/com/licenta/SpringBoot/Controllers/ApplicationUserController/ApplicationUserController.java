package com.licenta.SpringBoot.Controllers.ApplicationUserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;
import com.licenta.SpringBoot.Repositorys.ApplicationUserRepo.ApplicationUserRepository;

@RestController
public class ApplicationUserController {
	
	@Autowired
	private ApplicationUserRepository userRepo;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/sign-up", method=RequestMethod.POST)
	public void signup(@RequestBody ApplicationUser date){
		ApplicationUser dateUser=date;
		PasswordEncoder pass=new BCryptPasswordEncoder();
		String encodedPass=pass.encode(date.getPassword());
		dateUser.setPassword(encodedPass);
		userRepo.save(dateUser);
	}
}
