package com.licenta.SpringBoot.Services.MediciServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.Services.SpecializareServices.SpecializareService;

@Service
public class MediciServices {
	
	@Autowired
	private MediciRepo mediciRepo;
	@Autowired
	private SpecializareService specializare;
	
	
	public void  addMedic(MediciModel medicModel) {
		specializare.addSpecializare(medicModel.getSpecializare());
		mediciRepo.save(medicModel);
	}
	
	public void deleteMedic(MediciModel medicModel) {
		MediciModel med=new MediciModel();
		med=mediciRepo.findByEmail(medicModel.getEmail());
		mediciRepo.delete(med);
	}
	

}
