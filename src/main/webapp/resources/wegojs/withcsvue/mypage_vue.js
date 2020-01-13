var mypage_vue = mypage_vue || {}
mypage_vue = {
mypage_body: () => {
return `<div id="host-container">
<div>
	<form action="/admin/user/list/all" method="GET" name="searchForm" id="searchForm">
		<div id="host-header" align="center">
			<h1>xxx님의 Mypage</h1>
		</div>
		<div class="sub">
			<div align="center">
      <div style="display: inline-block;">
				<div class="card-block" >
					<div class="form-group row">
						<label for="userName" class="col-sm-2 form-control-label">아이디</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="userName" value="">
						</div>
					</div>

					<div class="form-group row">
						<label for="userName" class="col-sm-2 form-control-label">담당자이름</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="userName" value="">
						</div>
					</div>
					<div class="form-group row">
						<label for="managerTitle" class="col-sm-2 form-control-label">업체명</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="pubManagerTitle" value="">
						</div>
					</div>
					<div class="form-group row">
						<label for="managerTitle" class="col-sm-2 form-control-label">업체주소</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="pubManagerTitle" value="">
						</div>
					</div>

					<div class="form-group row">
						<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
						<input type="hidden" class="form-control" name="userPhone" value="010-324324-23423">
						<div class="col-sm-6 input-group" id="phoneIpt">
							<input type="text" class="form-control" id="userPhone1" value="">
							<span class="input-group-addon">-</span>
							<input type="text" class="form-control" id="userPhone2" value="">
							<span class="input-group-addon">-</span>
							<input type="text" class="form-control" id="userPhone3" value="">
						</div>
					</div>
					<div class="form-group row">
						<label for="email" class="col-sm-2 form-control-label">이메일</label>
						<input type="hidden" class="form-control" name="userEmail" value="whcksals27@naver.com">
						<div class="col-sm-6 input-group" id="emailIpt">
							<input type="text" class="form-control" id="userEmail1" value="" readonly="readonly">
							<span class="input-group-addon">@</span>
							<input type="text" class="form-control" id="userEmail2" value="" readonly="readonly">
						</div>
					</div>

					<div class="form-group row">
						<label for="managerName" class="col-sm-2 form-control-label">담당자 직함</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="pubManagerName" value="">
						</div>
					</div>

					<div class="form-group row">
						<label for="managerEmail" class="col-sm-2 form-control-label">담당자 이메일</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="pubManagerEmail" value="">
						</div>
					</div>
          
					<div class="form-group row">
						<label for="managerPhone" class="col-sm-2 form-control-label">담당자 전화번호</label>
						<div class="col-sm-5">
							<input type="text" class="form-control" name="pubManagerPhone" value="">
						</div>
          </div>
          </div>
		  <div text-align: center; font-size: 0;>
		  			<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="listhost_btn" class="col-sm-5">
							<a href="#">
								<h2 align="center">리스트 |</h2>
							</a>
						</span>
					</span>
					<span class="form-group row" style="display: inline-block; margin-right:1%">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="change_btn" class="col-sm-5">
							<a href="#">
								<h2 align="center">| 정보수정 |</h2>
							</a>
						</span>
					</span>
					<span class="form-group row" style="display: inline-block;">
						<label for="managerPhone" class="col-sm-2 form-control-label"></label>
						<span id="delete_btn" class="col-sm-5">
							<a href="#">
								<h2 align="center ">| 회원탈퇴</h2>
							</a>
						</span>
          </span>
          </div>
				</div>


			</div>
	</form>
</div></div>`

}
}