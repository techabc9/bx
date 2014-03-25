$(document).ready(function(){
	var $mask=$('#mask');
	var $slidenc=$('#slideWrap > .slide:not(.bx-clone)');
	slider = $('#slideWrap').bxSlider({
		slideWidth: 1245,
		minSlides: 1,
		maxSlides: 2,
		controls:false,
		pager:false,
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
		}
	});

	mslide=$('#m_slide').bxSlider({
		pager:false,
		slideSelector:'.ms',
		infiniteLoop: false,
		hideControlOnEnd: true,
		slideWidth:430,
		slideMargin:10,
		nextText:'',
		prevText:''
	});

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
		//slider.goToSlide(11);
	}
	$('#lnb > li').on('mouseenter mouseleave focusin focusout', function(e) {
		var _this=$(this);
		if(e.type === 'mouseenter' || e.type === 'focusin'){
			var timer = window.setTimeout(function () {
				_this.addClass('hover');
				_this.find('.dep2').slideDown();
			}, 100);
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
	$('#faqList > li').on('click', function(e) {
		if(e.type === 'click'){
			$('#faqList > li').removeClass('on');
			$('#faqList > li').find('dd').slideUp();
			$(this).addClass('on');
			$(this).find('dd').slideDown();
		}
	});

	
});

function goToSlider(v){
	slider.goToSlide(v);
}

function goToNext(){
	slider.goToNextSlide();
}
