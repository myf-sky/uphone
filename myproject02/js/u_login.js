/**用户名和密码的非空验证**/
$(".login_name").on('blur',function () {
  if (!this.value) {
    $("#showName").css('display','block');
  }else{
    $("#showName").css('display','none');
  }
});
$(".login_pwd").blur(function () {
  if (!this.value) {
    $("#showPwd").css('display','block');
  }else{
    $("#showPwd").css('display','none');
  }
});

/**登录单击按钮事件监听**/
$('.login_sub input').click(function () {
  var data = $('.login').serialize();
  console.log(data);
  $.ajax({
    type: 'POST',
    url: 'data/user/u_login.php',
    data: data,
    success: function (result) {
      console.log(result.uname);
      if (result.code === 200) {              //登录成功
        var pageToJump = result.pageToJump?result.pageToJump:'u_plist.html';
        location.href = pageToJump;
      } else if (result.code === 201) {       //登录失败
        alert('登录失败!!! 用户名或密码输入有误');
      } else {
        alert('登录失败!!! 原因：' + result.msg);
      }
    }
  });
});

/***7天之内不再登录***/
$(document).ready(function () {
    if ($.cookie("rmbUser") == "true") {
        $(".remember").attr("checked", true);
        $(".login_name").val($.cookie("username"));
        $(".login_pwd").val($.cookie("password"));
    }
});
//记住用户名密码
function save() {
    if ($(".remember").attr("checked")) {
        var str_username = $(".login_name").val();
        console.log(str_username);
        var str_password = $(".login_pwd").val();
        $.cookie("rmbUser", "true", {expires: 7}); //存储一个带7天期限的cookie
        $.cookie("username", str_username, {expires: 7});
        $.cookie("password", str_password, {expires: 7});
    }
    else {
        $.cookie("rmbUser", "false", {expire: -1});
        $.cookie("username", "", {expires: -1});
        $.cookie("password", "", {expires: -1});
    }
}
