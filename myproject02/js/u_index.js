/**
 * Created by Administrator on 2017/12/17.
 */
(()=>{
    $.ajax({
        url: 'data/user/session_data.php',
        success: function(result){
            if(result.uname){
                $('.col-xs-3').html('<a class="u_login" href="#" style="color:#C94E13;">&nbsp;欢迎:'+result.uname+' </a><a href="u_reg.html" class="u_reg logout">退出</a>');
                $('.logout').click(function(e){
                    e.preventDefault();
                    $.ajax({
                        url: 'data/user/logout.php',
                        success: function(result){
                            if(result.code===200){
                                var choose=confirm('退出成功点击确定重新返回登录页面');
                                if(choose)
                                    location.href = 'u_login.html';
                            }else {
                                confirm('退出失败！原因：'+result.msg);
                            }
                        }
                    })
                });
            }
        }
    })
})()
