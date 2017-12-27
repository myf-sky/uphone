/**异步请求搜索商品列表**/
function loadProductByPage(pno){
    var kw = null;
    if(location.search)
        {kw = location.search.split('=')[1];}
    $.ajax({
        url: 'data/product/u_plist.php',
        data: {pno: pno, kw: kw},
        success: function (data) {
            console.log(data);
            var html = '';
            var result=data.data;
            for( var i=0;i<result.length;i++){
                html+=`<td>
                        <a href="#"><img src="${result[i].pic}" width="186px" height="186px" /></a>
                        <div class="p-detail">
                            <h3>￥${result[i].price}</h3>
                            <p>${result[i].title}</p>
                            <a>-</a>
                            <input type="text" value="1">
                            <span>+</span>
                            <button class="p-shoppingCart">加入购物车</button>
                            <button class="p-shopping">一键购</button>
                        </div>
                    </td>`;
            }
            $('.p-product tr').html(html);
            $('.p-detail>a').on('click',function(){
                var value = $(this).next('input').val();
                if (value > 1) {
                    value--;
                    $(this).next('input').val(value);
                }
            });
            $('.p-detail>span').on('click',function(){
                var value = $(this).prev('input').val();
                value++;
                $(this).prev('input').val(value);
            });
            ////创建分页条
            var pageCount=data.pageCount, pageNo=data.pno;
            var lis="";
                for(var i=1;i<=pageCount;i++){
                    lis+=(i!=pageNo?`<a href="#" onclick='jump(${i})'>${i}</a>`:
                        `<a href="#" class="current"  onclick='jump(${i})'>${i}</a>`);
                }
            var html= `<a href="#" onclick="change(true)">上一页</a>${lis}<a href="#" onclick="change(false)">下一页</a>`;
            var divPages=$(".paging");
            divPages.html(html);

        }
    })
}
// *******************************分页条点击事件*************************************
function jump(k){
    $('.paging a').removeClass('current');
    $('.paging a:nth-child('+(k+1)+')').addClass('current');
    loadProductByPage(k);
}
// *******************************上一页、下一页点击事件******************************
function change(val){
    var pages=$('.paging a');
    if(val){
        for(var i=2;i<=pages.length-1;i++){
            if($('.paging a:nth-child('+i+')').hasClass('current')){
                pages.removeClass('current');
                if(i==2){i=3};
                $('.paging a:nth-child('+(i-1)+')').addClass('current');
                loadProductByPage(i-2);
                console.log(i-2);
                break;
            }
        }
    }else{
        for(var i=2;i<=pages.length-1;i++){
            if($('.paging a:nth-child('+i+')').hasClass('current')){
                $('.paging a').removeClass('current');
                if(i==pages.length-1){i=pages.length-2}
                $('.paging a:nth-child('+(i+1)+')').addClass('current');
                loadProductByPage(i);
                console.log(i);
                break;
            }
        }
    }
}
loadProductByPage(2);
// ***************************加入购物车功能待完成************************************
