package com.licenta.SpringBoot.Services.ServiciiServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;
import com.licenta.SpringBoot.Repositorys.ServiciiRepository.ServiciiRepo;

@Service
public class ServiciiServices {
	
	@Autowired
	private ServiciiRepo serviciu;
	
	public void addServicii(ServiciiModel modelServiciu) {
		serviciu.save(modelServiciu);
	}

}
