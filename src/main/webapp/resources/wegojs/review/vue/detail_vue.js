var detail_vue = detail_vue || {}
detail_vue = {
	detail:j=>{return ` 
<div style="display: block; padding-right: 17px; width: 70%; text-align: center; border: solid #d4d4d4;">
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
              </div>


`



	}
}