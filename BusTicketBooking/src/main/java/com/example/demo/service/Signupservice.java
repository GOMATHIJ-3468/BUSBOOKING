package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Signup;
import com.example.demo.repository.SignupRepo;

@Service
public class Signupservice {

	@Autowired
	SignupRepo sr;
	
	public Signup post(Signup ss) {
		return sr.save(ss);
	}
	
	public List<Signup> get(){
		return sr.findAll();
	}
	
	public Signup update(Signup ss) {
		return sr.saveAndFlush(ss);
	}
	
	public void del(String id) {
		 sr.deleteById(id);
	}
}
