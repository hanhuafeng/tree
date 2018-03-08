// JavaScript source code

/*!
 * edh5 1.0 
 * Copyright 2015 edh5.com
 * http://www.edh5.com/
 * author:sky
*/

$(function () {
        var animatingSvg = Snap('#cd-animated-svg'),
			loadingCircle = animatingSvg.select('.cd-loading-circle-filled');
			
	    var animatingSvg2 = Snap('#cd-animated-svg2'),
			loadingCircle2 = animatingSvg2.select('.cd-loading-circle-filled');
		
		var animatingSvg3 = Snap('#cd-animated-svg3'),
			loadingCircle3 = animatingSvg3.select('.cd-loading-circle-filled');
		
		var animatingSvg4 = Snap('#cd-animated-svg4'),
			loadingCircle4 = animatingSvg4.select('.cd-loading-circle-filled');
			
		var circumf = Math.PI*(loadingCircle.attr('r')*2);
		initLoading();	
		initLoading2();
		initLoading3();
		initLoading4();
		
		$('.what_list ul li:nth-child(1)').hover(function(){
			//$(this).find('#cd-animated-svg').hide();
			var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 0, function( value ){ 
				loadingCircle.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
	    },function(){
			var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 486.946861306418, function( value ){ 
				loadingCircle.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
		});
		
		$('.what_list ul li:nth-child(2)').hover(function(){
			//$(this).find('#cd-animated-svg').hide();
			var strokeOffset = loadingCircle2.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 0, function( value ){ 
				loadingCircle2.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
	    },function(){
			var strokeOffset = loadingCircle2.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 486.946861306418, function( value ){ 
				loadingCircle2.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
		});
		
		$('.what_list ul li:nth-child(3)').hover(function(){
			//$(this).find('#cd-animated-svg').hide();
			var strokeOffset = loadingCircle3.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 0, function( value ){ 
				loadingCircle3.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
	    },function(){
			var strokeOffset = loadingCircle3.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 486.946861306418, function( value ){ 
				loadingCircle3.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
		});
		
		$('.what_list ul li:nth-child(4)').hover(function(){
			//$(this).find('#cd-animated-svg').hide();
			var strokeOffset = loadingCircle4.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 0, function( value ){ 
				loadingCircle4.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
	    },function(){
			var strokeOffset = loadingCircle4.attr('stroke-dashoffset').replace('px', '');
			globalAnimation = Snap.animate(strokeOffset, 486.946861306418, function( value ){ 
				loadingCircle4.attr({ 'stroke-dashoffset': value })
				}, (strokeOffset/circumf)*525, mina.easein, function(){	
				}
			);
		});
		
		
		function initLoading() {
		loadingCircle.attr({
			'stroke-dasharray': circumf+' '+circumf,
			'stroke-dashoffset': circumf,
		});	
	    }
		function initLoading2() {
			loadingCircle2.attr({
				'stroke-dasharray': circumf+' '+circumf,
				'stroke-dashoffset': circumf,
			});	
		}
		function initLoading3() {
			loadingCircle3.attr({
				'stroke-dasharray': circumf+' '+circumf,
				'stroke-dashoffset': circumf,
			});	
		}
		function initLoading4() {
			loadingCircle4.attr({
				'stroke-dasharray': circumf+' '+circumf,
				'stroke-dashoffset': circumf,
			});	
		}
	
})



