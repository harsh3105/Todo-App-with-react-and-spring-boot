package com.todoapp.api.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoapp.api.model.Todo;

@Repository
public interface TodoJpaRepo extends JpaRepository<Todo,Long>{
	
	List<Todo> findByUsername(String username);

	

}
