package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Signup;
import com.example.demo.service.Signupservice;

@RestController
@CrossOrigin
public class Signupcontoller {

	@Autowired
	Signupservice ss;
	
	@PostMapping("addacc")
	public Signup postinfo(@RequestBody  Signup su) {
		return ss.post(su);
	}
	
	@GetMapping("getacc")
	public List<Signup> getinfo(){
		return ss.get();
	}
	
	@PutMapping("updateacc")
	public Signup updateinfo(@RequestBody Signup su) {
		return ss.update(su);
	}
	
	@DeleteMapping("delacc")
	public String delete(@PathVariable String id) {
		 ss.del(id);
		 return "DELETED";
	}
	
}
