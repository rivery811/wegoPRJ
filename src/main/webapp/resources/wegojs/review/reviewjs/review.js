var review = review || {};
review = (()=>{
 const WHEN_ERR = '호출하는 리뷰 js를 찾을 수 없습니다 .'
    let context, js;
    let mainVuejs,detail,writejs,search;
    let reviewmainvue;
    let init = () => {
        context = $.ctx()
        js = $.js()
       
		reviewmainvue=js+ '/review/vue/main_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
        detail=js+ '/review/vue/detail_vue.js'
        search=js+ '/review/vue/search_vue.js'
        writejs=js+ '/review/reviewjs/write.js'

    }
    let onCreate = () => {
        init();
        $.when(
			$.getScript(mainVuejs),
            $.getScript(detail),
            $.getScript(writejs),        
            $.getScript(search),
			$.getScript(reviewmainvue)	

        ).done(() => {   
            setContentView()
            
 
            movewrite()
            movesearch()
            make()
            crw()
    
           
            
        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
        $('#mainbody').empty()
        $(main_vue.review()).appendTo('#mainbody')
        recent_list({pageNo: 1 }) 
        scroll()      
        $(main_vue.head()).appendTo('head')
    }
    let scroll=()=>{
        let count =1;
         $(window).scroll(function() {           
            if ($(document).height() - $(this).height() - 100 < $(this).scrollTop()) {
            count++;
            recent_list({pageNo:count})        
            }          
        })
    }


    let recent_list=x=>{
   
        $.getJSON(context+'/review/list/'+x.pageNo,d=>{

           $.each(d.review,(i,j)=>{
               $(`<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div id="id${j.artseq}" class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img style="width:100%;"class="img-fluid" src=${j.img} alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${j.title}</h4>
          </div>
        </div>`).appendTo('#reviewbody')
        $('#id'+j.artseq).click(e=>{
            e.preventDefault()
            alert('디테일')
            $('html').scrollTop(0);
            $('#reviewbody').empty()
			 $(`<div style="display: block; padding-top:20px; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
              <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" src=${j.img} alt="">
              <p>${j.content}</p>           
              <div style=" padding-left: 10px;">
                <input type="text" style="width:100%" />
                <a href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>
              </div>
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                <li>a;lkdsjflakhgi;law</li>
                <li>ahgl;aksgk;lsadghlksadghs</li>
                <li>aldjghlaskdjhgljksadghsadkjgh</li>
              </div>                
              </div>`).appendTo('#reviewbody')
              $(window).unbind('scroll');
            })

           })  
   
        })
       

    }



    let movewrite=()=>{
        $('#gowrite').click(e=>{
            e.preventDefault()
            write.onCreate()
        
        })
    }

        let movesearch=()=>{
        $('#searchbtn').click(e=>{
            e.preventDefault()
            
            $.getJSON(context+'/review/search/'+$('#searchword').val(),d=>{
                alert('서치 '+d.title)
                $('#reviewbody').empty()
                 $.each(d,(i,j)=>{
                 $(`<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div id="id${i}" class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img style="width:100%;"class="img-fluid" src=${j.img} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${j.title}</h4>
                    </div>
                    </div>`).appendTo('#reviewbody')
                    $('#id'+i).click(e=>{
                    e.preventDefault()
                    alert('디테일')
              $('#reviewbody').empty()
			 $(`<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
                  <h2 class="text-uppercase">${j.title}</h2>
              <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" src=${j.img} alt="">
              <p>${j.content}</p>           
              <div style=" padding-left: 10px;">
                <input type="text" style="width:100%" />
                <a href="#" class="genric-btn primary small" style="width:100%">댓글달기</a>
              </div>
              <div style="text-align: initial; padding-left: 15px; padding-top: 9px; padding-bottom: 10px;">
                <li>a;lkdsjflakhgi;law</li>
                <li>ahgl;aksgk;lsadghlksadghs</li>
                <li>aldjghlaskdjhgljksadghsadkjgh</li>
              </div>                
              </div>`).appendTo('#reviewbody')

                })

                 })


            
            })

        

        })
    }



     let make =()=>{
         $('#create').click(()=>{
             $.getJSON(context+'/review/create/table',d=>{
                 alert("성공!!"+d.msg)
             })
        })
     }
     
     let crw =()=>{
         $('#crawling').click(()=>{
             $.getJSON(context+'/review/crawler',d=>{
                 alert("성공!!")
             })
        })
     }


    return { onCreate }

})()