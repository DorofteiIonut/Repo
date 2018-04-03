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
	
	public CabinetModel addCabinet (CabinetModel newCabinet) {
		List<CabinetModel> listaCabinete=cabinetRepo.findByDenumireAndCabAdress(newCabinet.getDenumire(), newCabinet.getCabAdress());
		CabinetModel cabineteMedic=new CabinetModel();
		if(listaCabinete.isEmpty()) {
		CabinetModel cabinetToAdd=newCabinet;
		cabinetToAdd.setIdentificator(newCabinet.getCabAdress()+newCabinet.getDenumire()+newCabinet.getTip());
		System.out.println(cabinetToAdd.getIdentificator());
		cabinetRepo.save(cabinetToAdd);
		cabineteMedic=(cabinetRepo.findByIdentificator(cabinetToAdd.getIdentificator()));
		System.out.println(cabineteMedic.toString());
		}
		return cabineteMedic;
	} 
	
	public void deleteCabinet(CabinetModel delCabinet) {
		List<CabinetModel> listaCabinete=cabinetRepo.findByDenumireAndCabAdress(delCabinet.getDenumire(), delCabinet.getCabAdress());
		cabinetRepo.delete(listaCabinete);
	}

}
