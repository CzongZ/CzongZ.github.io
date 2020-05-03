
$('#test1').on('click',function(){
layer.msg('hello');
  });
   //弹出一个页面层
  $('#test2').on('click', function(){
    layer.open({
      type: 1,
      area: ['600px', '360px'],
      shadeClose: true, //点击遮罩关闭
      content: '\<\div style="padding:20px;">自定义内容\<\/div>'
    });
  });
   //弹出一个iframe层
  $('#test3').on('click', function(){
    layer.confirm('您是如何看待前端开发？', {
  	btn: ['重要','奇葩'] //按钮
	}, function(){
 	 layer.msg('的确很重要', {icon: 1});
			}, function(){
  	layer.msg('也可以这样', {
    time: 20000, //20s后自动关闭
    btn: ['明白了', '知道了']
  });
});
  });
  //弹出一个loading层
  $('#test4').on('click', function(){
    var ii = layer.load();
    //此处用setTimeout演示ajax的回调
    setTimeout(function(){
      layer.close(ii);
    }, 1000);
  });
  //弹出一个tips层
  $('#test5').on('click', function(){
    layer.tips('Hello tips!', '#test5');
  });