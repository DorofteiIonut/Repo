package com.licenta.SpringBoot.Repositorys;
import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.Users;

public interface UsersRepo extends CrudRepository<Users, Long>{

}
