package com.licenta.SpringBoot.Repositorys.RecenziiRepository;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;

public interface RecenziiRepo extends CrudRepository<RecenziiModel, Long>{

}
