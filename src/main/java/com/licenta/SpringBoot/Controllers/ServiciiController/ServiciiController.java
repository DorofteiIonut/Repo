package com.licenta.SpringBoot.Controllers.ServiciiController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;
import com.licenta.SpringBoot.Services.ServiciiServices.ServiciiServices;

@RestController
@RequestMapping(value="/servicii")
public class ServiciiController {
	
	@Autowired
	private ServiciiServices serviciu;

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<?> addServicii(@RequestBody ServiciiModel serviceModel){
		System.out.println("addSericii:"+serviceModel.toString());
		try {
			serviciu.addServicii(serviceModel);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}

}
