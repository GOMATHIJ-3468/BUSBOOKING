package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Create;

import jakarta.transaction.Transactional;

public interface CreateRepo extends JpaRepository<Create, Integer>{
	
	@Query("SELECT CASE WHEN COUNT(c) > 0 THEN true ELSE false END FROM Create c WHERE c.emailid = :email and c.password=:pass")
    boolean existsByName(@Param("email") String email,@Param("pass") String pass);

	
	@Query(value = "select * from Createtable where emailid=:s",nativeQuery = true)
	public List<Create> showquerydetails(@Param("s") String email);
	
	@Modifying
	@Transactional
	@Query(value ="delete from Createtable where emailid=:s",nativeQuery = true)
	public int deletelogin(@Param("s") String emailid);
}
