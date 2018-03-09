package com.licenta.SpringBoot.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.Users;
import com.licenta.SpringBoot.Services.UsersServices;
import com.licenta.SpringBoot.WebSecurity.TokenAuthService;

@RestController
public class UsersControllers {

	@Autowired
	UsersServices services;
	
	 @CrossOrigin(origins = "http://localhost:3000")
	 @RequestMapping(value = "/api/userslist", method = RequestMethod.GET)
	 public ResponseEntity<List<Users>> usersList(){
		 List<Users>listaUsers=services.listaUsers();
		 if(listaUsers.isEmpty()) {
			 return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		 }
		 return new ResponseEntity<List<Users>>(listaUsers, HttpStatus.OK);
	 }
	 @CrossOrigin(origins = "http://localhost:3000")
	 @RequestMapping(value = "/auth", method = RequestMethod.GET)
	 public ResponseEntity<String> getToken(){
		 System.out.println("########3 "+TokenAuthService.getJWT());
		 if(TokenAuthService.getJWT()!=null) {
		 return new ResponseEntity<String>( TokenAuthService.getJWT(),HttpStatus.OK);
		 }
		 return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	 }
}
