package com.licenta.SpringBoot.Services.ProgramariServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;
import com.licenta.SpringBoot.Repositorys.ProgramariRepository.ProgramariRepo;

@Service
public class ProgramariServices {

	@Autowired
	private ProgramariRepo programariRepo;

	public void addProgramari(ProgramariModel programare) throws Exception {
		ProgramariModel programari = programariRepo.findByDataAndMedic(programare.getData(),programare.getMedic());
		if (programari == null) {
			programariRepo.save(programare);
		} else {
			throw new Exception("Error");
		}
	}
}
