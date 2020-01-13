var tourizmVue = tourizmVue || {}
tourizmVue = {
		tourizm_body : () => {
			return `<div class ="container" style = "height: 1300px; width: 2000px;">
            <div class = "mainimg" style = "text-align: center;"><h2>관광지</h2><br>
                  <input type="text" id ="search" style = "height: 30px;
					border-radius: 50px;
					border : 2px solid black; text-align : center;" value="관광지 검색">
                        <div class = "manu" style = "display: inline-block;" >
                  추천순 : <input type="checkbox" name="">
                  별점순 : <input type="checkbox" name="">
                  평점순 : <input type="checkbox" name="">
            </div>
            </div>
            
            
            <div class = "cl1" style = "margin-top: 2%;
		        width: 50%;
		        height: 80%;
		        float: left;
		        box-sizing: border-box;
		        border: 1px solid black;">
        
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist1.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">경복궁
                        <div class = "info" style = "position: relative;">경복궁에 대한 정보</div>
                       
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                        
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
							  <div class = "good">
                              	<h4>평점 : 4점</h4>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
						<img src = "/web/resources/wegoimg/tourlistimg/tourlist2.jpg">
						</div>
                        <div class = "tx1" style = "position: relative;">N서울타워
                              <div class = "info" style = "position: relative;">N서울타워에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                              
                              <div class = "good">
                              	<h4>평점 : 4점</h4>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist3.jpg">
					   	</div>
                        <div class = "tx1"  style = "position: relative;">명동
                              <div class = "info" style = "position: relative;">명동에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div>  
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist4.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">북촌한옥마을
                              <div class = "info" style = "position: relative;">북촌한옥마을에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div>  
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist5.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">인사동
                              <div class = "info" style = "position: relative;">인사동에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                       <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist6.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">창덕궁
                              <div class = "info" style = "position: relative;">창덕궁에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div>  
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist7.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">롯데월드
                              <div class = "info" style = "position: relative;">롯데월드에 대한 정보</div>
                       <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist8.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">청계천
                              <div class = "info" style = "position: relative;">청계천에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist9.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">남산
                              <div class = "info" style = "position: relative;">남산에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist10.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">동대문 디자인 플라자
                             <div class = "info" style = "position: relative;">동대문 디자인 플라자에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div>  
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist11.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">스타필드 코엑스몰
                              <div class = "info" style = "position: relative;">스타필드 코엑스몰에 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  
                  <div class = "cl5" style = "margin-top: 2%;
					margin-left: 1%;
					box-sizing: border-box;
			        border: 1px solid black;
			        width : 32%;
			        height : 22.2%;
			        float:left;">
                        <div class = "climg1" style = "	width: 100%;
					   	height : 60%;
					   	border : 1px solid black;
					   	position: relative;">
					   	<img src = "/web/resources/wegoimg/tourlistimg/tourlist12.jpg">
					   	</div>
                        <div class = "tx1" style = "position: relative;">광장시장
                              <div class = "info" style = "position: relative;">광장시장 대한 정보</div>
                        <div class = "sstar">
                        <p id="star_grade">
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
				        <a href="#">★</a>
						</p> 
                        </div> 
                              <div class="heart"  style="position: absolute;
							   	right : 1px;
							   	top : 0px;
							   	width : 40px;
							   	height : 80px;">
                                    <button id = "heart1" style ="height:30px; width:30px; background : none; border: none; float : right;">
                                    <img src = "/web/resources/wegoimg/tourlistimg/beforeheart.png"></button>
                              </div>
                        </div>
                  </div>
                  
            </div>
            
            <div class = "cl2" style = "margin-top: 2%;
        width: 50%;
        height : 80%;
        float: right;
        box-sizing: border-box;
	  border: 1px solid black;"> 
	 




		</div>
      <div class="stickycss" style="  display: inline-block;  position: sticky;   top: 20%;  width: 80px;  height: 80px; margin-left:5%;">	
	  <div id="map" style="margin-right:2%;margin-left:5%;margin-top:20%;width:500px;height:400px;"></div>
	  <p id="result"></p> 
	 </div>
           <div id = "dijkstra" style="
	text-align: center;
	position : center;
	margin-top : 10px;">
      	<button id = "dijkstra_btn">최단거리 조회하기</button>
		</div>
      </div>`
		}
}