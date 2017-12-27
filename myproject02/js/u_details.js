/***加载指定编号的产品详情***/
$.ajax({
  url: 'data/product/u_details.php',
  data: 'lid='+location.search.split('=')[1],
  success: function(result){
    console.log(123);
    console.log(result);
  },
  err:function(){
    console.log(10000000000);
  }
})
