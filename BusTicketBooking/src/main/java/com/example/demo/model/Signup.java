package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Signuptable")
public class Signup {
	
	@Id
	private String emailid;
	private String password;
	public Signup() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Signup(String emailid, String password) {
		super();
		this.emailid = emailid;
		this.password = password;
	}
	
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
