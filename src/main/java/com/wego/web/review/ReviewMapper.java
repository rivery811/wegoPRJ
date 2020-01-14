package com.wego.web.review;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface ReviewMapper {
	public void createReview(HashMap<String, String> paramMap);
	public void dropReview(HashMap<String, String> paramMap);
	public void truncateReview(HashMap<String, String> paramMap);
	public void insertReview();
	

}
