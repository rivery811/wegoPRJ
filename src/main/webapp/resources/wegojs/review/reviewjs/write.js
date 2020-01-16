var write = write||{}
write=(()=>{
	let context, js;
	let writevue,reviewjs;
	let init=()=>{
		context = $.ctx()
		js = $.js()
		writevue=js+'/review/vue/write_vue.js'
		reviewjs = js +'/review/reviewjs/review.js'
	}
	let onCreate=()=>{
		init();
		$.when(
			$.getScript(writevue),
			$.getScript(reviewjs)
		).done(()=>{
			setContentView()
			write()
		}).fail(()=>{

		})
	}
	let setContentView=()=>{
		
		$('#reviewbody').html(write_vue.write())
	}
	let write =()=>{

		$('#content')
		.on("dragover", dragOver)
		.on("dragleave", dragOver)
		.on("drop", uploadFiles);
 
		function dragOver (e){
		e.stopPropagation();
		e.preventDefault();
		if (e.type == "dragover") {
        $(e.target).css({
            "background-color": "skyblue",
            "outline-offset": "-20px"
        });
		} else {
			$(e.target).css({
				"background-color": "lightgray",
				"outline-offset": "-10px"
			});
		}
		}
		
		function uploadFiles(e) {
			e.stopPropagation();
			e.preventDefault();
			dragOver(e); 
		
			e.dataTransfer = e.originalEvent.dataTransfer; 
			var files = e.target.files || e.dataTransfer.files;
		
			if (files.length > 1) {
				alert('하나만 올려라.');
				return;
			}

			if (files[0].type.match(/image.*/)) {
				$(e.target).html(`<img  src=" `+ window.URL.createObjectURL(files[0])+`" alt=""></img>`)
				$(`<img  src=" `+ window.URL.createObjectURL(files[0])+`" style="width:30px; height:30px"></img>`).appendTo(e.target)

			}else{
			alert('이미지가 아닙니다.');
			return;
			}
			




					
		$('#writebtn').click(e=>{
			e.preventDefault();
			alert('글쓰기')
			let json = {
				img:window.URL.createObjectURL(files[0]),
  				title : $('#form_write input[name="title"]').val(),
				content : $('#form_write textarea[name="content"]').val(),
				boardtype:'review'
			}
			$.ajax({
				url:context+'/review/write',
				type:'POST',
				data:JSON.stringify(json),
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					review.onCreate()
				},
				error:e=>{
					alert(' write ajax실패')
				}
			})
		})


		}


	}
	return{onCreate}

})();