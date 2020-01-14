package com.wego.web.review;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired ReviewMapper reviewMapper;
	
    @GetMapping("/create/table")
    public Map<?,?> createReview(){
    	HashMap<String,String> paramMap = new HashMap<>();
    	System.out.println("11111");
    	paramMap.put("CREATE_REVIEW", SQL.CREATE_REVIEW.toString());
    	System.out.println("왔니"+SQL.CREATE_REVIEW.toString());
    	Consumer<HashMap<String,String>> c = t-> reviewMapper.createReview(paramMap);
    	c.accept(paramMap);
    	paramMap.clear();
    	paramMap.put("msg", "SUCCESS");
    	return paramMap;
    }

}
