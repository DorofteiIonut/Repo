package com.licenta.SpringBoot.Repositorys.MediciRepository;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

public interface MediciRepo extends CrudRepository<MediciModel, Long>{
	MediciModel findByEmail(String email);

}
