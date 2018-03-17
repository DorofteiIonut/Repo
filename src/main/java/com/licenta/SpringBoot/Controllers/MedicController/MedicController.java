package com.licenta.SpringBoot.Controllers.MedicController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Services.MediciServices.MediciServices;

@RestController
@RequestMapping(value="/medic")
public class MedicController {
	
	@Autowired
	private MediciServices medicServices;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<Void> addMedic(@RequestBody MediciModel medicModel){
		System.out.println("addMedic:"+ medicModel.toString());
		try {
		medicServices.addMedic(medicModel);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/delete", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteMedic(@RequestBody MediciModel medicModel){
		System.out.println("deleteMedic:"+ medicModel.toString());
		try {
		medicServices.deleteMedic(medicModel);
		return new ResponseEntity<Void>(HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}
	
	
	
	

}
