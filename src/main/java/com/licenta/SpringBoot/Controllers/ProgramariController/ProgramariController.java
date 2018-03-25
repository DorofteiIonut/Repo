package com.licenta.SpringBoot.Controllers.ProgramariController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;
import com.licenta.SpringBoot.Services.ProgramariServices.ProgramariServices;

@RestController
@RequestMapping(value="/programare")
public class ProgramariController {
	
	@Autowired
	private ProgramariServices programari;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<?> addProgramari(@RequestBody ProgramariModel newProgramare) {
		System.out.println("addProgramare:"+ newProgramare.toString());
		try {
		programari.addProgramari(newProgramare);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		}catch(Exception e) {
			System.out.println("Message:"+e.getMessage());
			return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
			
		}
	}

}
