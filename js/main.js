function sel_enable(id){
	$(id).removeAttr('disabled');
	if(detectWeb){
		$(id).selectmenu();
	}
}

function sel_disable(id){
	$(id).attr('disabled','disabled');
	if(detectWeb){
		$(id).selectmenu();
	}
}
function setupLabel() {
	if ($('.label_chk input').length) {
		$('.label_chk').each(function(){ 
			$(this).removeClass('c_on');
		});
		$('.label_chk input:checked').each(function(){ 
			$(this).parent('label').addClass('c_on');
		});
	};
	if ($('.label_radio input').length) {
		$('.label_radio').each(function(){ 
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){ 
			$(this).parent('label').addClass('r_on');
		});
	};
};

var currentSlide=0;
function mainSlide(v){
	var $mask=$('#mask');
	var $slidenc=$('#slideWrap > .slide:not(.bx-clone)');
	if (v == 'load'){
		slider = $('#slideWrap').bxSlider({
			slideWidth: 1245,
			touchEnabled: false,
			minSlides: 1,
			maxSlides: 2,
			controls:false,
			pager:false,
			startSlide:currentSlide,
			onSliderLoad: function(currentIndex){
				if (currentIndex == 0 || currentIndex == slider.getSlideCount() - 1){
					$mask.hide();
					$('#slideWrap > .slide:not(.bx-clone)').eq(1).addClass('blur2');
				}else{
					$mask.show();
				}
			},
			onSlideBefore: function($slideElement, oldIndex, newIndex){
				if (newIndex == slider.getSlideCount() - 1){
					$mask.hide();
					$slidenc.removeClass('blur blur2');
				}else if(newIndex == 0){
					$mask.hide();
					$slidenc.eq(1).addClass('blur2');
				}else{
					$mask.show();
					$slidenc.removeClass('blur blur2');
					$slidenc.eq(newIndex+1).addClass('blur');
				}
			},
			onSlideAfter:function($slideElement, oldIndex, newIndex){
				currentSlide = newIndex;
			}
		});
		mslide=$('#m_slide').bxSlider({
			pager:false,
			slideSelector:'.ms',
			infiniteLoop: false,
			touchEnabled: false,
			hideControlOnEnd: true,
			slideWidth:430,
			slideMargin:10,
			nextText:'',
			prevText:''
		});
		if($(window).width()<=640){
			slider.reloadSlider({
				slideWidth: 0,
				touchEnabled: false,
				controls:false,
				pager:false,
				infiniteLoop:false,
				adaptiveHeight:true,
				startSlide:currentSlide,
				onSliderLoad: function(currentIndex){
					$slidenc.removeClass('blur blur2');
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					$slidenc.removeClass('blur blur2');
				},
				onSlideAfter:function($slideElement, oldIndex, newIndex){
					currentSlide = newIndex;
				}
			});
			mslide.reloadSlider({
				pager:false,
				slideSelector:'.ms',
				infiniteLoop: false,
				touchEnabled: false,
				hideControlOnEnd: true,
				slideMargin:10,
				nextText:'',
				prevText:''
			});
		}else{
			slider.reloadSlider({
				slideWidth: 1245,
				touchEnabled: false,
				minSlides: 1,
				maxSlides: 2,
				controls:false,
				pager:false,
				startSlide:currentSlide,
				onSliderLoad: function(currentIndex){
					if (currentIndex == 0 || currentIndex == slider.getSlideCount() - 1){
						$mask.hide();
						$('#slideWrap > .slide:not(.bx-clone)').eq(1).addClass('blur2');
					}else{
						$mask.show();
					}
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					if (newIndex == slider.getSlideCount() - 1){
						$mask.hide();
						$slidenc.removeClass('blur blur2');
					}else if(newIndex == 0){
						$mask.hide();
						$slidenc.eq(1).addClass('blur2');
					}else{
						$mask.show();
						$slidenc.removeClass('blur blur2');
						$slidenc.eq(newIndex+1).addClass('blur');
					}
				},
				onSlideAfter:function($slideElement, oldIndex, newIndex){
					currentSlide = newIndex;
				}
			});
			mslide.reloadSlider({
				pager:false,
				slideSelector:'.ms',
				infiniteLoop: false,
				touchEnabled: false,
				hideControlOnEnd: true,
				slideWidth:430,
				slideMargin:10,
				nextText:'',
				prevText:''
			});
		}
	}else{
		if($(window).width()<=640){
			slider.reloadSlider({
				slideWidth: 0,
				touchEnabled: false,
				controls:false,
				pager:false,
				infiniteLoop:false,
				adaptiveHeight:true,
				startSlide:currentSlide,
				onSliderLoad: function(currentIndex){
					$slidenc.removeClass('blur blur2');
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					$slidenc.removeClass('blur blur2');
				},
				onSlideAfter:function($slideElement, oldIndex, newIndex){
					currentSlide = newIndex;
				}
			});
			mslide.reloadSlider({
				pager:false,
				slideSelector:'.ms',
				infiniteLoop: false,
				touchEnabled: false,
				hideControlOnEnd: true,
				slideMargin:10,
				nextText:'',
				prevText:''
			});
		}else{
			slider.reloadSlider({
				slideWidth: 1245,
				touchEnabled: false,
				minSlides: 1,
				maxSlides: 2,
				controls:false,
				pager:false,
				startSlide:currentSlide,
				onSliderLoad: function(currentIndex){
					if (currentIndex == 0 || currentIndex == slider.getSlideCount() - 1){
						$mask.hide();
						$('#slideWrap > .slide:not(.bx-clone)').eq(1).addClass('blur2');
					}else{
						$mask.show();
					}
				},
				onSlideBefore: function($slideElement, oldIndex, newIndex){
					if (newIndex == slider.getSlideCount() - 1){
						$mask.hide();
						$slidenc.removeClass('blur blur2');
					}else if(newIndex == 0){
						$mask.hide();
						$slidenc.eq(1).addClass('blur2');
					}else{
						$mask.show();
						$slidenc.removeClass('blur blur2');
						$slidenc.eq(newIndex+1).addClass('blur');
					}
				},
				onSlideAfter:function($slideElement, oldIndex, newIndex){
					currentSlide = newIndex;
				}
			});
			mslide.reloadSlider({
				pager:false,
				slideSelector:'.ms',
				infiniteLoop: false,
				touchEnabled: false,
				hideControlOnEnd: true,
				slideWidth:430,
				slideMargin:10,
				nextText:'',
				prevText:''
			});
		}
	}
}

$(document).ready(function(){
	mainSlide('load');

	$( "#mask" ).on( "click", function() {
		slider.goToNextSlide();
	});

	//lnb
	var setLnb = window.setTimeout(intLnb,2000);
	function intLnb(){
		$('#lnb_wrap').animate({'left':0},300,function(){
			$('.bg_m').css({'top':$(window).height()/2})
				.animate({'left':$(window).width()/2});
		});
		window.clearTimeout(setLnb);
		$( window ).resize(function() {
			$('.bg_m').css({'top':$(window).height()/2,'left':$(window).width()/2});
		}).scroll(function() {
			$('.bg_m').css({'top':$(window).height()/2+$(this).scrollTop() ,'left':$(window).width()/2+$(this).scrollLeft()});
		});
	}
	$('#lnb > li').on('mouseenter mouseleave focusin focusout', function(e) {
		var _this=$(this);
		if(e.type === 'mouseenter' || e.type === 'focusin'){
			var timer = window.setTimeout(function () {
				_this.addClass('hover');
				_this.find('.dep2').slideDown();
			}, 200);
			_this.data('timerid', timer);
		}else if(e.type === 'mouseleave' || e.type === 'focusout'){
			_this.removeClass('hover');
			_this.find('.dep2').slideUp();
			var timerid = _this.data('timerid');
			clearTimeout(timerid);
		}
	});
	$('#lnb').on('mouseenter mouseleave', function(e) {
		if(e.type === 'mouseenter'){
			$('#lnb_wrap').addClass('bg');
		}else if(e.type === 'mouseleave'){
			$('#lnb_wrap').removeClass('bg');
		}
	});
	$('.label_chk, .label_radio').on('click', function() {
		setupLabel();
	});
	setupLabel('.label_chk');
	setupLabel('.label_radio');
	
});

$(window).bind('resize', function(e){
	window.resizeEvt;
	$(window).resize(function(){
		clearTimeout(window.resizeEvt);
		window.resizeEvt = setTimeout(function(){
			mainSlide();
		}, 500);
	});
});

function goToSlider(v){
	slider.goToSlide(v);
}

function goToNext(){
	slider.goToNextSlide();
}

//input placeholder onblur="onBlur(this)" onfocus="onFocus(this)"
function onBlur(el) {
	if (el.value == '') {
		el.value = el.defaultValue;
		$(el).removeClass('focusin');
	}
}
function onFocus(el) {
	if (el.value == el.defaultValue) {
		el.value = '';
		$(el).addClass('focusin');
	}
}