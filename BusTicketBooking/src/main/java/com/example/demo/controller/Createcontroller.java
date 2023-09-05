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

import com.example.demo.model.Create;
import com.example.demo.service.Createservice;


@RestController
@CrossOrigin
public class Createcontroller {

	

	@Autowired
	Createservice cs;
	
	@PostMapping("addcreate")
	public Create postinfo(@RequestBody  Create cc) {
		return cs.post(cc);
	}
	
	@GetMapping("getcreate")
	public List<Create> getinfo(){
		return cs.get();
	}
	
	@GetMapping("getdetails/{emailid}/{password}")
	public boolean getde(@PathVariable String  emailid,@PathVariable String  password){
		return cs.getd(emailid, password);
	}
	@GetMapping("getdetails/{email}")
	public List<Create> getdet(@PathVariable  String email){
		return cs.getquerydetails(email);
	}
	
	@PutMapping("updatecreate")
	public Create updateinfo(@RequestBody Create cc) {
		return cs.update(cc);
	}
	
	@DeleteMapping("delcreate")
	public String delete(@PathVariable int str) {
		 cs.del(str);
		 return "DELETED";
	}
	
	@DeleteMapping("dellogin/{str}")
	public int delete(@PathVariable String str) {
		 return cs.delDetails(str);
		 //return "DELETED";
	}
	
}
