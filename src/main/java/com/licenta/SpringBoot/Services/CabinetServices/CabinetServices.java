package com.licenta.SpringBoot.Services.CabinetServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Repositorys.CabinetRepository.CabinetRepo;

@Service
public class CabinetServices {
	
	@Autowired
	private CabinetRepo cabinetRepo;
	
	public void addCabinet (CabinetModel newCabinet) {
		cabinetRepo.save(newCabinet);
		} 
	
	public void deleteCabinet(CabinetModel delCabinet) {
		List<CabinetModel> listaCabinete=cabinetRepo.findByDenumireAndCabAdress(delCabinet.getDenumire(), delCabinet.getCabAdress());
		cabinetRepo.delete(listaCabinete);
	}

}
