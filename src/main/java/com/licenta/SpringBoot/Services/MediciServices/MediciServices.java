package com.licenta.SpringBoot.Services.MediciServices;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Repositorys.CabinetRepository.CabinetRepo;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.ResponseEntity.SpecializareMedici;
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
	
	public List<SpecializareMedici> selectMedici(String specializare) { 
		List<SpecializareMedici> listaMedici=new ArrayList<>();
		List<MediciModel> listaSpecializareMedic=mediciRepo.findBySpecializare(specializare);
		for(MediciModel element:listaSpecializareMedic) {
			SpecializareMedici obiect=new SpecializareMedici();
			obiect.setNume(element.getNume());
			obiect.setPrenume(element.getPrenume());
			obiect.setNumereTel(element.getNumereTel());
			
			System.out.println("nume:"+element.getNume());
			System.out.println("prenume:"+element.getPrenume());
			System.out.println("nume:"+element.getNumereTel());
			List<String> adrese=new ArrayList<>();
			Set<CabinetModel> listaAdresaCabinet= element.getCabinete();
			for(CabinetModel cabinet:listaAdresaCabinet) {
				adrese.add(cabinet.getCabAdress());
				System.out.println("adresa:"+cabinet.getCabAdress());
			}
			obiect.setAdrese(adrese);
			
			float medie=0;
			int numarNote=0;
			Set<RecenziiModel> recenziiList=element.getRecenzii();
			for(RecenziiModel recenzie:recenziiList) {
				System.out.println("recenzie:"+recenzie.getMedie());
				medie+=recenzie.getMedie();
				numarNote++;
			}
			obiect.setMedieRecenzie((float) medie/numarNote);
			listaMedici.add(obiect);
		}
		return listaMedici;
	}

	public List<MediciModel> listaMedici(String specializare) {
		List<String> listaSpecializare = new  ArrayList<>();
		listaSpecializare.add(specializare);
		List<MediciModel> medicList =  mediciRepo.findBySpecializare(specializare);
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
		return null;
	}
	
	

}
