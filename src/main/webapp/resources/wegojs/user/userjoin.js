"use strict"
var userjoin = userjoin ||{}
userjoin=(()=>{
	const WHEN_ERR = '호출하는 userjoin 페이지가 없음'
	let context, js;
	let mainVuejs;
	let userjoinvuejs
	let mainHomejs
	let init = () => {
        context = $.ctx()
		js = $.js()
		userjoinvuejs = js + '/user/userjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(userjoinvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gologin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(userjoin_vue.userjoin_body())
	}
	let gologin = ()=>{
		$('#userhoin_btn').click(()=>{
                alert('유저회원가입')
                login.onCreate()
			})
	}

	return {onCreate}
})()