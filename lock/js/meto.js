/**
 * 演示站处理
 * @type {[type]}
 */
function metTemDemo(){
	window.useragent=navigator.userAgent,
	useragent_tlc=useragent.toLowerCase(),
	device_type = /iPad/.test(useragent) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(useragent) ? 'm' : 'd';
	if(device_type!='m' && location.href.indexOf('metinfo.cn')>=0 && !$('#met-demo-iframe',parent.document).length){
		document.domain='metinfo.cn';// 定义相同域名
		// 网站参数
		if(typeof M == 'undefined'){
			MSTR=$('meta[name=generator]').data('variable');
		    if(MSTR && MSTR.indexOf(',')>=0) MSTR=MSTR.split(',');
		    if(MSTR && MSTR.indexOf('|')>=0) MSTR=MSTR.split('|');
		    if(MSTR){
		    	M=new Array();
		    	M['weburl']=MSTR[0];
				M['lang']=MSTR[1];
				M['classnow']=parseInt(MSTR[2]);
				M['id']=parseInt(MSTR[3]);
				M['module']=parseInt(MSTR[4]);
				M['tem']=MSTR[0]+'templates/'+MSTR[5]+'/';
		    }
		}
		// M['weburl']='https://show.metinfo.cn/muban/res013/323/';
		M['metinfo_url']='https://www.metinfo.cn/';
		// 判断页面是否有固定定位元素
		var demo_iframe=1;
		$('*').each(function(index, el) {
			if($(this).css('position')=='fixed' && parseInt($(this).css('top'))<50){
				demo_iframe='iframe-min';
				return false;
			}
		});
		if(demo_iframe==1) $('html').css({'padding-top':50});
		// 所有处理
		var demoFun=function(id){
			// 插入头部iframe
			var demo_url=M['metinfo_url']+'product/showproduct.php?lang=cn&id='+id+'&demo=1&demo_iframe='+demo_iframe,
				head='<iframe src="'+demo_url+'" frameborder="0" name="demo_iframe" class="demo_iframe '+demo_iframe+'" style="width: 100%;height: 50px;position: fixed;left: 0;top: 0;z-index: 9999999;"></iframe>';
			$('body').before(head);
			if(demo_iframe=='iframe-min'){// 有固定定位元素则导航最小化
				var iframe_css='<style>.demo_iframe{-webkit-transition: all .5s;-o-transition: all .5s;transition: all .5s;}.demo_iframe.iframe-min{left: -100% !important;-webkit-transform: translate(163px,0);-ms-transform: translate(163px,0);-o-transform: translate(163px,0);transform: translate(163px,0);}</style>';
				$('head').append(iframe_css);
			}
			// 头部iframe交互处理
			$('.demo_iframe').load(function() {
				var $demo_iframe_contents=$(this).contents(),
					demo_iframe_window=$(this).prop('contentWindow'),
					demo_iframe_document=demo_iframe_window.document,
					$met_demo_head=$('.met-demo-head',demo_iframe_document),
					$meqia=$('#MEIQIA-PANEL-HOLDER',demo_iframe_document),
					$body=$('body',demo_iframe_document),
					$demo_iframe=$(this),
					body_outside=function(dom){
						return $(dom.target).closest(".met-demo-head,.webui-popover,#MEIQIA-PANEL-HOLDER,#shop-fashion-option,.alertify-logs").length;
					};
				$met_demo_head.mouseover(function() {
					$demo_iframe.height('100%');
				});
				$body.mouseover(function(e) {
		            if(!body_outside(e) && $meqia.css('z-index')<0 && !$('.modal-backdrop',demo_iframe_document).length && !$('.alertify-logs',demo_iframe_document).html()) $demo_iframe.height(50);
		        }).click(function(e) {
					if(!body_outside(e)) {
						$(this).css({background:'transparent'});
						$demo_iframe.height(50);
						$meqia.css({'z-index':-1,visibility:'hidden'});
						$('.alertify-logs',demo_iframe_document).html('');
					}
				});
				$met_demo_head.find('.showmeqia,.shop-favaorite').click(function(event) {
					$body.css({background:'rgba(0,0,0,.5)'});
					var interval=setInterval(function(){
						if($meqia.css('z-index')<0 && !$('.alertify-logs',demo_iframe_document).html()){
							$body.css({background:'transparent'});
							$demo_iframe.height(50);
							clearInterval(interval);
						}
					},300);
				});
				// 关闭导航
				$met_demo_head.find('.close-demo-head').click(function(event) {
					if(demo_iframe==1) $('html').animate({'padding-top':0}, 500);
					setTimeout(function(){
						$demo_iframe.remove();
					},500)
				});
				if(demo_iframe=='iframe-min'){
					// 导航展开
					$('.demo_iframe.iframe-min').mouseover(function(event) {
						$met_demo_head.removeClass('padding-0').find('.demo-option a').removeClass('hide');
						$met_demo_head.find('.showmore-demo-head').addClass('hide');
						$(this).removeClass('iframe-min');
					});
					// 导航收起
					$met_demo_head.find('.hide-demo-head').click(function(event) {
						$demo_iframe.addClass('iframe-min');
						$met_demo_head.addClass('padding-0').find('.demo-option a').addClass('hide');
						$met_demo_head.find('.showmore-demo-head,.close-demo-head').removeClass('hide');
						setTimeout(function(){
							$demo_iframe.height(50);
						},50)
					});
				}
			});
		}
		// 获取指定名称的cookie的值
		function getCookie(name) {
		    var cookie_str = document.cookie.split(";");
		    for (var i = 0; i < cookie_str.length; i++) {
		        cookie_str[i]=$.trim(cookie_str[i]);
		        var index = cookie_str[i].indexOf("="),
		            cookie_name = cookie_str[i].substring(0, index);
		        if (cookie_name == name) {
		            var temp = cookie_str[i].substring(index + 1);
		            return decodeURIComponent(temp);
		        }
		    }
		}
		// 执行处理
		var demo_info=getCookie('demo_info'),
			ajaxok=false;
		if(demo_info){// 如果是从官网模板详情页点击弹出演示站
			demo_info=demo_info.split('|');
			if(demo_info[0].indexOf(M['weburl'])>=0 || M['weburl'].indexOf(demo_info[0])>=0){
				demoFun(demo_info[1]);
			}else{
				ajaxok=true;
			}
		}else{
			ajaxok=true;
		}
		if(ajaxok){// 根据演示站地址从官网请求产品详情页数据
			$.ajax({
				url: M['metinfo_url']+'shop/cart.php?lang=cn&a=doget_product_by_demourl',
				type: 'GET',
				dataType: 'jsonp',
				cache: false,
				data: {demourl: M['weburl']},
				success:function(data){
					demoFun(data.listid);
					if(!data.listid) console.log('没有找到对应产品详情页');
				}
			});
		}
	}
}
metTemDemo();
