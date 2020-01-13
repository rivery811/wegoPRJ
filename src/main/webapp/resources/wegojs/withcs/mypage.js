"use strict"
var mypage = mypage ||{}
mypage=(()=>{
	const WHEN_ERR = '호출하는 mypage 페이지가 없음'
	let context, js;
    let mainVuejs,mypagevuejs,mainHomejs;

	let init = () => {
        context = $.ctx()
		js = $.js()
		mypagevuejs = js + '/withcsvue/mypage_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate = ()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(mypagevuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			godelete()
			gochange()
			golist() 
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$('#mainbody').html(mypage_vue.mypage_body())
	}
	let godelete=()=>{
		$('#delete_btn').click(()=>{
                alert('탈퇴클릭')
                deleteinfo.onCreate()
            })
	}
	let gochange=()=>{
		$('#change_btn').click(()=>{
                alert('수정클릭')
                changehost.onCreate()
            })
	}
	let golist=()=>{
		$('#listhost_btn').click(()=>{
                alert('리스트클릭')
                listhost.onCreate()
            })
	}

	return{onCreate}
})()