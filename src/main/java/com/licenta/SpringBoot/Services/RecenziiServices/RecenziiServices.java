package com.licenta.SpringBoot.Services.RecenziiServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Repositorys.RecenziiRepository.RecenziiRepo;

@Service
public class RecenziiServices {
	@Autowired
	private RecenziiRepo recenzieRepo;
	
	public void addRecenzie (RecenziiModel recenzie) {
		recenzieRepo.save(recenzie);
		
	}

}
