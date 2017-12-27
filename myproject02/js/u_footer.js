//加载footer
(()=>{
    $.ajax({
        type:'get',
        url:'u_footer.html',
        dataType:'html',
        success:function (result) {
            $('#u_footer').html(result);
        }
    })
})()

  
