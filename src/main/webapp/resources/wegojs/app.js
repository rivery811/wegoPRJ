"use strict";
var app = app || {};
app = (() => {
	const WHEN_ERR = 'app js를 찾을수 없습니다.'
	let context, js;
	let mainHomejs;
	let run = x => {
		$.getScript(x +'/resources/wegojs/cmm/router.js', () => {
			$.extend(new Session(x));
			onCreate();
		})
	}
	let init = () => {
		context = $.ctx();
		js = $.js();
		mainHomejs = js + '/cmm/mainHome.js'
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(mainHomejs)
		)
			.done(() => {
				alert('app js 진입성공')
				mainHome.onCreate()
			})
			.fail(() => {
				alert(WHEN_ERR)
			})
	}
	return { run }
})();