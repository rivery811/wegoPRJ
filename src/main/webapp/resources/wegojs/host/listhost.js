"use strict"
var listhost = listhost ||{}
listhost=(()=>{
	const WHEN_ERR = `호출하는 listhost 페이지가 없음`
	let context, js;
    let mainVuejs;
	let listhostvuejs;
	let mainHomejs
    let init = () => {
        context = $.ctx()
		js = $.js()
		listhostvuejs = js + '/hostvue/listhost_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(listhostvuejs),
			$.getScript(mainHomejs)
		).done(()=>{
			setContentView()
			gocreate()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(listhost_vue.listhost_body())
	}
	let gocreate=()=>{
		$('#createhost_btn').click(()=>{
                alert('업체추가하기 클릭')
                createhost.onCreate()
            })
	}


	return{onCreate}
})()