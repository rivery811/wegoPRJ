var deleteinfo_vue = deleteinfo_vue||{}
deleteinfo_vue = {
	deleteinfo_body:()=>{
		return `<form name="deletehost_form">
		<div style="margin-top: 1%; height: 31.5%;border: 1px groove #bcbcbc;">
			<span>ID :</span><span> ssss 님</span>
			<div>회원가입일 : xxxx 년 xx 월 xx 일</div><br/>
		</div>	
		<fieldset>
        <legend>비밀번호 입력</legend>
			<div><label for="hostPw">패스워드</label></div>
			<input type="password" id="hostPw" name="hostPw" maxlength="20" autocomplete="off">
			<div><label for="hostCheck">패스워드확인</label></div>
			<div><input type="password" id="hostPwCheck" name="hostPwCheck" maxlength="20" autocomplete="off"></div>
		</fieldset>
		<fieldset>
        <legend>탈퇴사유입력</legend>  
          <div class="fieldlabel"><label for="profile">탈퇴 사유를 선택해 주세요</label></div>
            <div class="formfield">
              <input type="radio" name="hosttype" value="서비스불만족" alt="탈퇴사유" >서비스불만족
              <input type="radio" name="hosttype" value="원하는정보없음" alt="탈퇴사유" >원하는정보없음
              <input type="radio" name="hosttype" value="다른사이트이용" alt="탈퇴사유" >다른사이트이용
              <input type="radio" name="hosttype" value="기타" alt="탈퇴사유">기타
              <input type="text" placeholder="직접입력">
			</div>
		</fieldset>
		<button id="gogomain_btn" style="width: 10%; float: right;">탈퇴</button><br/><br/>
	</form>`
	}
}