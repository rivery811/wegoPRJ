var hostjoin_vue = hostjoin_vue || {}
hostjoin_vue = {
	hostjoin_body:()=>{
		return `<div id="host-container">
	<div style="solid black;">
		<div>
			<div id="host-header">
				<h1 align="center">업체 회원 가입</h1>
			</div>
			<form name="registerform">

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">아이디입력</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">패스워드입력</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>


				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">이름입력</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>
				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">닉네임입력</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>

				<div class="form-group row">
					<label for="email" class="col-sm-2 form-control-label">이메일</label>
					<input type="hidden" class="form-control" name="userEmail" value="">
					<div class="col-sm-6 input-group" id="emailIpt">
						<input type="text" class="form-control" id="userEmail1" value="" >
						<span class="input-group-addon">@</span>
						<input type="text" class="form-control" id="userEmail2" value="" >
					</div>
				</div>

				<div class="form-group row">
					<label for="phone" class="col-sm-2 form-control-label">전화번호</label>
					<input type="hidden" class="form-control" name="hosttel" value="">
					<div class="col-sm-6 input-group" id="phoneIpt">
						<input type="text" class="form-control" id="userPhone1" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone2" value="">
						<span class="input-group-addon">-</span>
						<input type="text" class="form-control" id="userPhone3" value="">
					</div>
				</div>


				<div class="form-group row">
					<label for="managerTitle" class="col-sm-2 form-control-label">업체주소</label>
					<div class="col-sm-5">
						<input type="text" name="pwd" size="20" placeholder="시/도 입력 " autocomplete="address-level1">
						<input type="text" name="pwd" size="20" placeholder="시/군/구 입력" autocomplete="address-level2">
						<input type="text" name="pwd" size="20" placeholder="상세주소 입력" autocomplete="address-line1"
							style="float: none;width: 78%;">
					</div>
				</div>


				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">사업자등록번호</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" name="userName" maxlength="20" autocomplete="off"
							value="">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">업체종류 선택</label>
					<div class="col-sm-5">
						<input type="radio" name="hosttype" value="숙박" alt="업체종류">숙박
						<input type="radio" name="hosttype" value="음식점" alt="업체종류">음식점
						<input type="radio" name="hosttype" value="교통" alt="업체종류">교통
						<input type="radio" name="hosttype" value="기타" alt="업체종류">기타
						<input type="text" placeholder="직접입력">
					</div>
				</div>

				<div class="form-group row">
					<label for="userName" class="col-sm-2 form-control-label">업체소개등록</label>
					<div class="col-sm-5">
						<textarea name="info" id="hostinfo" placeholder="업체 소개를 입력해 주세요" cols="30" rows="10"
							style="width: 98%;"></textarea><br />
					</div>
				</div>

				<div class="btnfield" style="text-align: center">
					<input id="hostjoin_btn" type="submit" value="회원가입">
				</div>
			</form>
		</div>
	</div>
</div>`
	}
}