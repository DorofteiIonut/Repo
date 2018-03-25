package com.licenta.SpringBoot.Services.MediciServices;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Repositorys.CabinetRepository.CabinetRepo;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.Services.CabinetServices.CabinetServices;
import com.licenta.SpringBoot.Services.SpecializareServices.SpecializareService;

@Service
public class MediciServices {

	@Autowired
	private MediciRepo mediciRepo;
	@Autowired
	private SpecializareService specializareService;
	@Autowired
	private CabinetServices serviciuCabinet;
	@Autowired
	private CabinetRepo cabRepo;

	public void addMedic(MediciModel medicModel) {
		MediciModel newMedic = medicModel;
		List<String> specializariList = medicModel.getSpecializare();
		Set<CabinetModel> cabineteList = medicModel.getCabinete();
		Set<CabinetModel> cabineteMedicList = new HashSet<>();
		newMedic.setCabinete(cabineteMedicList);
		for (String specializare : specializariList) {
			specializareService.addSpecializare(specializare);
		}
		for (CabinetModel cabinet : cabineteList) {
			if (serviciuCabinet.addCabinet(cabinet) != null) {
				serviciuCabinet.addCabinet(cabinet);
				cabineteMedicList.add(
						cabRepo.findByIdentificator(cabinet.getCabAdress() + cabinet.getDenumire() + cabinet.getTip()));
			} else {
				cabineteMedicList.add(
						cabRepo.findByIdentificator(cabinet.getCabAdress() + cabinet.getDenumire() + cabinet.getTip()));
			}
		}
		newMedic.setCabinete(cabineteMedicList);
		mediciRepo.save(newMedic);
	}

	public void deleteMedic(MediciModel medicModel) {
		MediciModel med = new MediciModel();
		med = mediciRepo.findByEmail(medicModel.getEmail());
		mediciRepo.delete(med);
	}

	public List<MediciModel> listaMedici(String specializare) {
		List<String> listaSpecializare = new  ArrayList<>();
		listaSpecializare.add(specializare);
		List<MediciModel> medicList =  mediciRepo.findBySpecializare(listaSpecializare);
		Set<CabinetModel> cabinetModel=new HashSet<>();
		for(MediciModel model: medicList) {
			MediciModel mediciResponse=new MediciModel();
			System.out.println(model.getIdMed()+"  " + model.getNume()+"   " +model.getPrenume());
			System.out.println(model.getEmail()+"  " + model.getFacebook()+"   " +model.getNumereTel());
			cabinetModel=model.getCabinete();
		}
		System.out.println(cabinetModel.size());
		for(CabinetModel model: cabinetModel) {
			System.out.println(model.getCabAdress());
		}
//		System.out.println(medicList.get(1).getNume());
//		System.out.println(medicList.get(1).getPrenume());
//		System.out.println(medicList.get(1).getEmail());
//		System.out.println(medicList.get(1).getFacebook());
//		System.out.println(medicList.get(1).getSpecializare());
//		System.out.println(medicList.get(1).getNumereTel());
//		System.out.println(medicList.get(1).getCabinete());
		// System.out.println(medicList.get(1).getOrar());
		// System.out.println(medicList.get(1).getProgramari());
		// System.out.println(medicList.get(1).getRec());

		return null;
	}

}
