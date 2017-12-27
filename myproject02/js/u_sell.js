// 1、轮播图
$(function () {
    $.ajax({
        url: 'data/product/banners.php',
        success: function (data) {
            //1.加载轮播广告项
            var adHtml = '';
            var indicatorHtml = '';
            for (var k = 0; k < data.carouselItems.length; k++) {
                var p = data.carouselItems[k];
                adHtml += `
                 <li><a href="#"><img src="${p.img}"/></a></li>
                `;
                indicatorHtml += `
                    <li></li>
                `;
            }
            $('.rslides').html(adHtml);
            $('.banner_circle').html(indicatorHtml);

            var i= 0,j=0;
            var timer=setInterval(task,1500);
            var item=document.getElementsByClassName("focus");
            var items=item[0].querySelectorAll(".rslides img");
            var circles=item[0].querySelectorAll(".banner_circle li");
            function task(){
                for(j=0;j<items.length;j++){
                    items[j].style.zIndex=1;
                    circles[j].style.background="#9d9d9d";
                }
                j=i;
                items[i].style.zIndex=10;
                circles[i].style.background="#f44600";
                i++,j++;
                if(i>6){i=0;j=0}
            }
        }
    });
});

/**2、异步请求商品推荐列表**/
function loadProductByPage(pno){
  var kw = null;
  if(location.search)kw = location.search.split('=')[1];
  $.ajax({
      url: 'data/product/u_sell.php',
      success: function (pager) {
          var html = '';
          var result=pager.recommendedItems;
          for( var p of result){
        html +=  `
          <dl>
                <dt><a href="#"><img src="${p.pic}" width="140" height="140" /></a></dt>
                <dd>
                    <h3><a href="#">${p.title}</a></h3>
                    <h4>${p.details}</h4>
                    <h5>抢 购 价：￥<span>${p.price}</span> (降价通知)</h5>
                    <div class="sell_promopt">
                        <span>温馨提示：</span>
                    </div>
                    <div class="sell_check">
                        <a href="#">加入购物车</a>
                        <a class="sell_buy" href="u_car.html">立即购买</a>
                    </div>
                </dd>
                <div class="clears"></div>
            </dl>
        `;
      }
      $('.sells').html(html);
    }
  })
}
loadProductByPage(1);