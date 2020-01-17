var main_vue = main_vue || {}
main_vue = {
  

   head:()=>{return `
    <head>
   <link href="/web/resources/wegojs/review/css/agency.min.css" rel="stylesheet">
    <link href="/web/resources/wegojs/review/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
   
    </head>
  `},
  review:()=>{return `	
<div  ><button id = "create" >생성우와아아아아</button></div>
<div  ><button id = "crawling" >crawling</button></div>










  <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner">
                        <div class="breadcrumb_iner_item text-center">
                            <h2>wegostargram</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
  
  

 <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
        <div class="col-lg-4"></div>
  <div class="blog_right_sidebar">
   <aside class="single_sidebar_widget search_widget">
                          
                              <div class="form-group">
                                  <div class="input-group mb-3">
                                      <input id="searchword" type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
                                      <div class="input-group-append">
                                          <button id="searchbtn" class="btn" type="button"><i class="ti-search"></i></button>
                                      </div>                                    
                                  </div>
                              </div>

                              <div style="padding-bottom: 20px;" >
                              <button id = "gowrite" class="button rounded-0 primary-bg text-white w-100 btn_1" >Write</button>
                              </div>
                                                       
    </aside>
  </div>

      <div id = "reviewbody" class="row" style="justify-content: center; ">
     </div>
    </div> 
  </section>

`



	}
}