var userjoin_vue = userjoin_vue||{}
userjoin_vue ={
	userjoin_body:()=>{
		return `<div id="host-container">
	<div style="solid black;">
		<div>
			<div id="host-header">
				<h1 align="center">일반 회원 가입</h1>
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
        
				<div class="btnfield" style="text-align: center">
					<input id="hostjoin_btn" type="submit" value="회원가입">
				</div>
			</form>
		</div>
	</div>
</div>`
	}
}