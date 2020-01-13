var login_vue = login_vue || {}
login_vue = {
	login_body: () => {
		return `<section class="inner-page-contents">
      
      
      <div class="container">
        <div class="row">
          <!-- LEFT COLUMN STARTS-->
          <div style="text-align: center; width: 66.66666667%; margin-left: 16.66666667%;">
            <!-- FOOD STARTS-->
            <section>
              <div class="row category-caption">
                <div style="text-align: center; width: 50%; margin-left: 25%;">
                  <h2>로그인</h2>
                </div>
              </div>
              <div class="row login-form">
              
              <div >카톡로그임 , 페북로그인 , 네이버로그인 , 구글로그인</div>

                <div class="input_form" style="width: 50%; margin-left: 25%;">
                    <input name="loginId" id="loginId" type="text" placeholder="이메일을 입력해주세요.">
                </div>
                <div class="input_form" style="width: 50%; margin-left: 25%; margin-top: -1px;">
                    <input name="loginPw" id="loginPw" type="password" placeholder="비밀번호를 입력해주세요.">
                </div>
                <div style="width: 50%; margin-left: 25%;">
                    <input id="main_btn" type="button" value="로그인" style="height: 45px;">
                </div>
				<div style="width: 50%; margin-left: 25%;">
				<a id="findid_btn" href="#">아이디 찾기 |</a><a id="findpwd_btn" href="#">| 비밀번호 찾기</a></div>
              </div>
            </section>
            <!-- /. FOOD ENDS-->
          </div>
          <!-- /. LEFT COLUMN ENDS --> 
        </div>
      </div>
      
    </section>
`
	}
}