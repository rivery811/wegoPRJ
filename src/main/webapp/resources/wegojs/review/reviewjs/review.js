
var review = review || {};
review = (()=>{
 const WHEN_ERR = '호출하는 리뷰 js를 찾을 수 없습니다 .'
    let context, js;
    let mainVuejs,detail,write,search;
    let reviewmainvue;
    let init = () => {
        context = $.ctx()
        js = $.js()
       
		reviewmainvue=js+ '/review/vue/main_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
        detail=js+ '/review/vue/detail_vue.js'
        write=js+ '/review/vue/write_vue.js'
        search=js+ '/review/vue/search_vue.js'

    }
    let onCreate = () => {
        init();
        $.when(
			$.getScript(mainVuejs),
            $.getScript(detail),
            $.getScript(write),
            $.getScript(search),
		
			$.getScript(reviewmainvue),	

        ).done(() => {   
            setContentView()
            move()
            movewrite()
            movesearch()
            make()
           
            
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
		 $('#mainbody').html(main_vue.review())
    }

	let move=()=>{
		$('#movedetail').click(e=>{
			e.preventDefault()
			 $('#reviewbody').html(detail_vue.detail())


        })
    }

    let movewrite=()=>{
        $('#gowrite').click(()=>{
            alert('글쓰기')
        $('#reviewbody').html(write_vue.write())
        })
    }

        let movesearch=()=>{
        $('#searchbtn').click(()=>{
            alert('서치 ')
        $('#reviewbody').empty()
        $(search_vue.search()).appendTo('#reviewbody')

        })
    }
     let make =()=>{
         $('#create').click(()=>{
             $.getJSON(context+'/review/create/table',d=>{
                 alert("성공!!"+d.msg)
             })



        })

     }


    return { onCreate }

})()