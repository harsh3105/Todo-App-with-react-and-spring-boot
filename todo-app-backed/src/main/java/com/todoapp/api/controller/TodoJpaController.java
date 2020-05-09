package com.todoapp.api.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todoapp.api.model.Todo;
import com.todoapp.api.repo.TodoJpaRepo;
import com.todoapp.api.service.TodoHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoJpaController {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@Autowired
	private TodoJpaRepo repo;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return repo.findByUsername(username);
		//return todoService.findAll();
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo (@PathVariable String username, @PathVariable long id){
		repo.deleteById(id);
		
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodos(@PathVariable String username,@PathVariable long id){
		return repo.findById(id).get();
		//return todoService.findById(id);
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id, @RequestBody Todo todo){
		todo.setUsername(username);
		Todo todoUpdated = repo.save(todo);
		
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo){
		
		todo.setUsername(username);
		
		Todo createdTodo = repo.save(todo);
		
		
		URI uri =ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}

}
