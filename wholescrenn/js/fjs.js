// JavaScript source code

/*!
 * edh5 1.0 
 * Copyright 2015 edh5.com
 * http://www.edh5.com/
 * author:sky
*/
    $(function () {
        $('.covervid-video').coverVid(1920, 1080);
        $.fn.fullpage({
            slidesColor: ['', '', '', '', ''],
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
            loopBottom: true,
            //easingcss3: "cubic-bezier(0.23, 1, 0.32, 1)",
            easingcss3: "cubic-bezier(.86, 0, .07, 1)",

            scrollingSpeed: 700,
            menu: '.nav',
            //css3: true,// 开启CSS3动画
   

            afterLoad: function (anchorLink, index) {
                if (index == '2') {
                    $('.what_txt').stop().animate({ "left": 0, "opacity": 1 }, { duration: 325, easing: 'linear' });
                    $('.what_list ul').delay(625).animate({ 'opacity': 1 }, 625);
                }
                if (index == '3') {
                    $('.from_txt').stop().animate({ "left": 0, "opacity": 1 }, { duration: 325, easing: 'linear' });
                    $('.from_list ul li').addClass('current');
                }
                if (index == '5') {
                    $('.message').stop().animate({ "left": 0, "opacity": 1 }, { duration: 675, easing: 'linear' });
                }

            },
            onLeave: function (index, direction) {
                if (index == '2') {
                    $('.what_txt').stop().animate({ "left": 500, "opacity": 0 }, 325);
                    $('.what_list ul').delay(425).animate({ 'opacity': 0 }, 425);
                }
                if (index == '3') {
                    $('.from_txt').stop().animate({ "left": 500, "opacity": 0 }, 325);
                }
                if (index == '5') {
                    $('.message').stop().animate({ "left": -500, "opacity": 0 }, { duration: 675, easing: 'linear' });
                }
            }

        });

        var myVideo = document.getElementById('video');
        if (myVideo.paused) {
            myVideo.play();
        }
        jQuery(".tabBar").slide({ mainCell: ".conWrap", effect: "left", trigger: "click", pnLoop: false });
        $(".list").slide({ mainCell: ".list_ul", effect: "topLoop", vis: 1, scroll: 1, autoPlay: true, delayTime: 500, interTime: 3000 });
		
		
		
    });
	
	