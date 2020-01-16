package com.wego.web.review;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Stream;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.wego.web.proxy.Box;
import com.wego.web.proxy.Inventory;
import com.wego.web.proxy.Proxy;
@Component("reviewCrawler")
@Lazy
public class ReviewCrawling extends Proxy{
	@Autowired Inventory<HashMap<String,String>> inventory;
	@Autowired Box<String> box;
	@Autowired Review review;
	@Autowired ReviewProxy reviewProxy;
	@Autowired ReviewMapper reviewMapper;
	
	@Transactional
	public ArrayList<HashMap<String,String>> reviewCrawing(){
		String url = "https://store.naver.com/accommodations/detail?entry=pbl&id=37270680&matchSidRoomIds=3094845%2C3094846%2C3094854%2C3094964&query=%ED%8C%8C%EC%9D%B8%ED%9E%90%EC%95%A0%EA%B2%AC%ED%8E%9C%EC%85%98&tab=fsasReview";
		inventory.clear();
		
		try {
			Document rawData = Jsoup.connect(url).timeout(10 * 1000).get();
			Elements title = rawData.select("div[class=tit] a");
			Elements content = rawData.select("div[class=txt ellp2]");
			Elements img = rawData.select("div[class=thumb]");
			
			HashMap<String, String> map = null;
			for(int i = 0; i<title.size();i++) {
				map = new HashMap<String, String>();
				map.put("title", title.get(i).text());
				map.put("content", content.get(i).text());
				map.put("img", img.get(i).select("img").attr("src"));
				review.setImg(img.get(i).select("img").attr("src"));
				review.setTitle(title.get(i).text());
				review.setContent(content.get(i).text());
				review.setUid(reviewProxy.makeUserid());
				review.setBoardtype("review");
				reviewMapper.insertReview(review);
							
				inventory.add(map);
			}

			
		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return inventory.get();
	}
	

}
