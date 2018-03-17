package com.licenta.SpringBoot.Repositorys.ProgramariRepository;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;

public interface ProgramariRepo extends CrudRepository<ProgramariModel, Long>{

}
