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
	
	public String saveUsers(Users user){
		usersRepo.save(user);
		return "Saved";
	}
	
	public String loginUser(Users userLogin) {
		String role=null;
		List<Users> userList=new ArrayList<>();
		usersRepo.findAll().forEach(userList::add);
		for(int i=0; i<userList.size();i++) {
			if(userLogin.equals(userList.get(i))) {
				role=userList.get(i).getRole();
			}
		}
		System.out.println("Login User Role:"+role);
		return role;
	}
}
