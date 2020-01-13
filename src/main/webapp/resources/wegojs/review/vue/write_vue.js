var write_vue = write_vue ||{}
write_vue ={
	write:()=>{return `
	           <div  id="portfolioModal6" tabindex="-1" role="dialog" style="display: block; padding-right: 17px;" aria-modal="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
				<!-- Project Details Go Here -->
				        <input  type="text" style = "width:100%"/>
                <div style="padding: 10px;">
                <img class="img-fluid d-block mx-auto" src="/web/resources/wegojs/review/img/portfolio/06-full.jpg" alt="">
                </div>
                <div style="padding: 10px;">
                  <textarea = "width:100%" name="" id="" cols="30" rows="20"></textarea>
                </div>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button"> write</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	`}
}