"use strict"
var joinchoice = joinchoice ||{}
joinchoice=(()=>{
	const WHEN_ERR = `호출하는 joinchoice 페이지가 없음`
	let context, js;
	let mainVuejs;
	let joinchoicevuejs
	let mainHomejs
	let userjoinjs
	let hostjoinjs
	let init = () => {
        context = $.ctx()
		js = $.js()
		joinchoicevuejs = js + `/withcsvue/joinchoice_vue.js`
		userjoinjs = js + `/user/userjoin.js`
		hostjoinjs = js + `/host/hostjoin.js`
	}
	let onCreate=()=>{
		init()
		$.when(
			
			$.getScript(joinchoicevuejs),
			$.getScript(userjoinjs),
			$.getScript(hostjoinjs),
			

		).done(()=>{
			setContentView()
			gochoice()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(joinchoice_vue.joinchoice_body())
	}
	let gochoice = ()=>{
		$('#userjoin').click(()=>{
                alert('유저회원가입')
                userjoin.onCreate()
			})
		$('#hostjoin').click(()=>{
                alert('호스트회원가입')
                hostjoin.onCreate()
            })
	}

	return {onCreate}
})()