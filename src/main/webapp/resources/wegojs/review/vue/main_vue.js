var main_vue = main_vue || {}
main_vue = {
  review:()=>{return `	
<div  ><button id = "create" >생성우와아아아아</button></div>

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
                                      <input type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'">
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

      <div id = "reviewbody" class="row" style="justify-content: center;">
        <div class="col-md-4 col-sm-6 portfolio-item" style="padding-bottom: 20px;">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div  style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/01-thumbnail.jpg" alt="">
          </a>

        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div class="portfolio-hover">
              <div style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/02-thumbnail.jpg" alt="">
          </a>

        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div class="portfolio-hover">
              <div style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/03-thumbnail.jpg" alt="">
          </a>

        </div>
        <div class="col-md-4 col-sm-6 portfolio-item" style="padding-bottom: 20px;">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/04-thumbnail.jpg" alt="">
          </a>

        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/05-thumbnail.jpg" alt="">
          </a>

        </div>
                <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/05-thumbnail.jpg" alt="">
          </a>

        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#">
            <div class="portfolio-hover">
              <div id = "movedetail" style="position: absolute;" class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img  class="img-fluid" src="/web/resources/wegojs/review/img/portfolio/06-thumbnail.jpg" alt="">
          </a>

        </div>
      </div>
    </div>
  </section>



`



	}
}