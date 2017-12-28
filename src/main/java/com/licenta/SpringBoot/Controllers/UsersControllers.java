package com.licenta.SpringBoot.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.Users;
import com.licenta.SpringBoot.Services.UsersServices;

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
	 @RequestMapping(value = "/api/saveuser", method = RequestMethod.POST)
	 public ResponseEntity<?> saveNewUser(@RequestBody Users user){
		 services.saveUsers(user);
		  return new ResponseEntity<Users>( user,HttpStatus.CREATED);
	 }
	 
	 //TestLogin
	 @CrossOrigin(origins = "http://localhost:3000")
	 @RequestMapping(value = "/login", method = RequestMethod.POST)
	 public ResponseEntity<?> login(@RequestBody Users user){
		if( services.loginUser(user)!=null) {
			user.setRole(services.loginUser(user));
			  return new ResponseEntity<Users>( user,HttpStatus.OK);
		}
		 return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	 }
}
