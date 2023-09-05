package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Create;
import com.example.demo.repository.CreateRepo;


@Service
public class Createservice {


	@Autowired
	CreateRepo cr;
	
	public Create post(Create cc) {
		return cr.save(cc);
	}
	
	public List<Create> get(){
		return cr.findAll();
	}
	
	public  boolean getd(String email,String pass){
		return cr.existsByName(email,pass);
	}
	public List<Create>getquerydetails(String email){
		return cr.showquerydetails(email);
	}
	
	public Create update(Create cc) {
		return cr.saveAndFlush(cc);
	}
	
	public void del(int str) {
		 cr.deleteById(str);
	}
	
	public int delDetails(String id) {
		return cr.deletelogin(id);
	}
}
