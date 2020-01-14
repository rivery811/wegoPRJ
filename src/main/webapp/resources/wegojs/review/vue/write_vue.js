var write_vue = write_vue ||{}
write_vue ={
	write:()=>{return `
	           <div   style="display: block; padding-right: 17px;padding-bottom: 17px; width: 70%; text-align: -webkit-center; border: solid #d4d4d4;">
        <div style="padding: 10px; width: 80%;">
          <input  type="text" style = "width:100%;"/>
        </div>
       <div style="padding: 10px; width: 80%;">
                <img class="img-fluid d-block mx-auto" src="/web/resources/wegojs/review/img/portfolio/06-full.jpg" alt="">
        </div>
        <div style="padding: 10px;width:100%;">
                  <textarea style= "width: 80%;" name="" id="" cols="30" rows="20"></textarea>
        </div>        
                <button class="btn btn-primary" data-dismiss="modal" type="button"> write</button>
     </div>

	`}
}