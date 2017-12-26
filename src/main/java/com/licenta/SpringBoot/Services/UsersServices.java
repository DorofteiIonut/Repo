package com.licenta.SpringBoot.Services;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.Users;
import com.licenta.SpringBoot.Repositorys.UsersRepo;

@Service
public class UsersServices {
	
	@Autowired
	UsersRepo usersRepo;
	
	public List<Users> listaUsers(){
		List<Users> userList=new ArrayList<>();
		usersRepo.findAll().forEach(userList::add);
		return userList;
	}
	
	public String saveUsers(String name, String pass, String role){
		Users newUser=new Users( name, pass, role);
		usersRepo.save(newUser);
		return "Saved";
	}
}
