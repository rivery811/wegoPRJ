"use strict"
var hostjoin = hostjoin ||{}
hostjoin=(()=>{
	const WHEN_ERR = '호출하는 host joinchoice 페이지가 없음'
	let context, js;
	let mainVuejs;
	let hostjoinvuejs
	let mainHomejs
	let loginjs
	let init = () => {
        context = $.ctx()
		js = $.js()
		hostjoinvuejs = js + '/hostvue/hostjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs =js+'/withcs/login.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(hostjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			gohostjoin()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(hostjoin_vue.hostjoin_body())
	}
	let gohostjoin=()=>{
		$('#hostjoin_btn').click(()=>{
                alert('호스트회원가입완료')
                login.onCreate()
            })
	}
	return{onCreate}
})()
