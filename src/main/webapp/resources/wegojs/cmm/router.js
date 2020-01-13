"use strict";
function Session(x) {
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('js', x + '/resources/wegojs');
	sessionStorage.setItem('css', x + '/resource/wegocss');
	sessionStorage.setItem('img', x + '/resources/wegoimg');
	return {
		ctx: () => { return sessionStorage.getItem('ctx'); },
		js: () => { return sessionStorage.getItem('js'); },
		css: () => { return sessionStorage.getItem('css'); },
		img: () => { return sessionStorage.getItem('img'); }
	}
}