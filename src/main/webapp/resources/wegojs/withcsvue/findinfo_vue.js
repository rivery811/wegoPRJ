var findinfo_vue = findinfo_vue||{}
findinfo_vue = {
	findinfo_id:()=>{
		return `<div>
  <div class="find">
    <form name="post">
      <h1>회원정보 찾기</h1>
      <p><a href="/">홈으로</a></p>
      <fieldset>
        <legend>아이디 찾기</legend>
        <div ><label for="hostId">이름</label></div>
        <span><input type="text" id="hostId" name="hostId" maxlength="20" placeholder="이름입력"></span>
        
        <div><label for="hostId">이메일</label></div>
        <input type="text" id="email01" name="email01" size="20" maxlength="20" 
             value="" autocomplete="off">
        <input id="email02" name="email02" list="domains" placeholder="도메인입력/선택">
        <select id="domains" style="height: 21.5px;vertical-align: middle;">
          <option value="직접입력">직접입력</option>
          <option value="naver.com">naver.com</option>
          <option value="daum.net">daum.net</option>
          <option value="gmail.com">gmail.com</option>
          <option value="yahoo.co.kr">yahoo.co.kr</option>
        </select>
        <input id="findid_btn" type="submit" value="아이디 찾기" />
      </fieldset>
    </form>
  </div>
</div>`
},
findinfo_pwd:()=>{
	return `<div class="find">
    <form method="post">
      <fieldset>
        <legend>비밀번호 찾기</legend>
        <div><label for="hostId">아이디</label></div>
        <input type="text" size="35" name="userid" placeholder="아이디입력">
        <input id="findpwd_btn" type="submit" value="비밀번호 찾기" />
        <div><label for="hostId">이메일</label></div>
        <input type="text" id="email01" name="email01" size="20" maxlength="20" 
             value="" autocomplete="off">
        <input id="email02" name="email02" list="domains" placeholder="도메인입력/선택">
        <select id="domains" style="height: 21.5px;vertical-align: middle;">
          <option value="직접입력">직접입력</option>
          <option value="naver.com">naver.com</option>
          <option value="daum.net">daum.net</option>
          <option value="gmail.com">gmail.com</option>
        </select>
      </fieldset>
    </form>
  </div>`
}

}