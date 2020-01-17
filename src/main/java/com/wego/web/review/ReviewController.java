package com.wego.web.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wego.web.proxy.Inventory;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired ReviewMapper reviewMapper;
	@Autowired ReviewCrawling reviewCrawler;
	@Autowired Inventory<Review[]> inventory;
	@Autowired ReviewProxy reviewProxy;
	@Autowired FileProxy fileProxy;	
	
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
    
	@GetMapping("/crawler")
	public ArrayList<HashMap<String,String>> db()  {
		return reviewCrawler.reviewCrawing();	
		//return null;
	}
	
	@GetMapping("/list/{pageNo}")
	public Map<?,?>list(@PathVariable int pageNo){
		System.out.println("리스트 컨트롤러");
		HashMap<String,List<Review>> map = new HashMap<>();
		reviewProxy.setPageNum(pageNo);
		reviewProxy.paging();
		map.put("review", reviewMapper.reviewlist(reviewProxy));
		System.out.println("리스트"+map.get("review"));
		return map;
	}

	@GetMapping("/search/{searchword}")
	public Review[] search(@PathVariable String searchword){	
		return reviewMapper.allreviewlist().stream()
				.filter(t->t.getTitle().contains(searchword)||t.getContent().contains(searchword)).toArray(Review[]::new);
	}
	
	@PostMapping("/write")
	public Map<?,?> write(@RequestBody Review param){
		HashMap<String,String> map = new HashMap<>();
		System.out.println("글쓰기 컨트롤러"+param.getTitle());
		System.out.println("글쓰기 컨트롤러"+param.getBoardtype());
		Consumer<Review> c = s->reviewMapper.insertReview(param);
		c.accept(param);	
		return map;
	}
	
	@PostMapping("/fileupload")
    public void fileupload(MultipartFile [] uploadFile) {
		System.out.println("파일 업로드");
		//System.out.println(uploadFile[0].getName());
		fileProxy.fileupload(uploadFile);
    }

}
