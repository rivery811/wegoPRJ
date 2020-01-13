"use strict"
var login = login ||{}
login=(()=>{
	const WHEN_ERR = '호출하는 login 페이지가 없음'
	let context, js;
    let mainVuejs;
	let loginvuejs;
	let mainHomejs
    let init = () => {
        context = $.ctx()
		js = $.js()
		loginvuejs = js + '/withcsvue/login_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(loginvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gomain()
			gofind()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('#mainbody').html(login_vue.login_body())
	}
	let gomain=()=>{
		$('#main_btn').click(()=>{
                alert('로그인성공클릭')
                mainHome.onCreate()
            })
	}
	let gofind=()=>{
		let x ='';
		$('#findid_btn').click(()=>{
				alert('아이디찾기클릭')
				x = 'id'
                findinfo.onCreate(x)
			})
		$('#findpwd_btn').click(()=>{
				alert('비밀번호찾기클릭')
				x = 'pw'
                findinfo.onCreate(x)
            })	
	}
	return{onCreate}
})()
