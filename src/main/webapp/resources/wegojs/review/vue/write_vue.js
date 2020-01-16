var write_vue = write_vue ||{}
write_vue ={
	write:()=>{return `
	      <div id="form_write"  style="display: block; padding-right: 17px;padding-bottom: 17px; width: 70%; text-align: -webkit-center; border: solid #d4d4d4;">
        <div style="padding: 10px; width: 80%;">
          <input name="title" type="text" style = "width:100%;"/>
        </div>


      <div id="content" style="padding: 10px; width: 80%;border: solid #d4d4d4;height:300px; padding:3px"></div>




       <div id="imgspace" >
               
            <div id="thumbnails"> </div>
        </div>
        <div style="padding: 10px;width:100%;">
                  <textarea name="content" style= "width: 80%;"  cols="30" rows="20"></textarea>
        </div>        
                <button id="writebtn" class="btn btn-primary" data-dismiss="modal" type="button"> write</button>
     </div>

	`}
}