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
function goTop() {
	$('html,body').animate({
		scrollTop: 0
	}, 500, "easeInExpo", function() {
		fn=0;
	});
}
$(document).ready(function(){
	// 네비게이션
	var top_height=162;
	var nav = $('#Nav li');
	var fn=0;
	var nav_on=0;
	$('#Nav li a, a.link_slide').on('click', function(e){
		goToSlider($(this).attr('href'));
		return false;
	});
	function goToSlider(target) {
		if (fn==0){
			fn=1;
			$('html,body').animate({
				scrollTop: $(target).offset().top - top_height
			}, 500, "easeInExpo", function() {
				fn=0;
			});
		}
	}
	$('#cont_mov').css({'height':$(window).height() - 30});
	$('#cont_mov object,#cont_mov embed').css({'height':$(window).height(),'width':$(window).width()});
	function navSet(v){
		var cont_offset=new Array();
		var cont_length = $('.full_section').length;
		for (var i=0;i<=cont_length-1;i++){
			cont_offset[i] = $('.full_section').eq(i).offset().top;
			if (cont_offset[i] - top_height - 1 <= v){
				$('#Nav li').removeClass('on');
				$('#Nav li[data-cont='+i+']').addClass('on');
				$('#Nav li[data-cont='+i+']').parents('li').addClass('on');
				nav_on = i;
			}
		}
		if (v <= $('#mainThmb').offset().top -1 ){
			$('#topNav').addClass('top_mov');
		}else{
			$('#topNav').removeClass('top_mov');
		}
		
	}
	
	$(window).on('scroll resize', function(e){
		if(e.type === 'scroll'){
			window.scrollEvt;
			$(window).scroll(function(){
				clearTimeout(window.scrollEvt);
				window.scrollEvt = setTimeout(function(){
					navSet($(window).scrollTop());
				}, 200);
			});
		}else if(e.type === 'resize'){
			window.resizeEvt;
			$(window).resize(function(){
				clearTimeout(window.resizeEvt);
				window.resizeEvt = setTimeout(function(){
					navSet($(window).scrollTop());
				}, 500);
				$('#cont_mov').css({'height':$(window).height() - 30});
				$('#cont_mov object,#cont_mov embed').css({'height':$(window).height(),'width':$(window).width()});
			});
		}
	});
	$('.wrap').on('click',function(){
		$('#Nav li').removeClass('on');
	});
	
	$('#Nav > li').on('mouseenter mouseleave focusin focusout', function(e) {
		var _this=$(this);
		if(e.type === 'mouseenter' || e.type === 'focusin'){
			var timer = window.setTimeout(function () {
				$('#Nav > li').removeClass('on');
				_this.addClass('on');
				//_this.find('.dep2').slideDown(200);
			}, 200);
			_this.data('timerid', timer);
		}else if(e.type === 'mouseleave' || e.type === 'focusout'){
			$('#Nav > li').removeClass('on');
			//_this.find('.dep2').slideUp(100);
			$('#Nav li[data-cont='+nav_on+']').addClass('on');
			$('#Nav li[data-cont='+nav_on+']').parents('li').addClass('on');
			var timerid = _this.data('timerid');
			clearTimeout(timerid);
		}
	});

	bxslide = $('#main_slider').bxSlider({
		slideSelector:'div.slide',
		touchEnabled:false,
		pager:false,
		nextText:'',
		prevText:'',
		onSliderLoad: function(currentIndex){
			var $main_div = $('.main_div > li');
			for (var j=0;j<=$main_div.length-1;j++){
				$main_div.eq(j).delay(j*300).animate({
					opacity: 1
				}, 500, "linear");
			}
		}
	});
	
	//FAQ
	var $faqList = $('#faqList > li');
	$faqList.on('click', function(e) {
		if(e.type === 'click' && $(this).hasClass('on') == false){
			$faqList.removeClass('on');
			$faqList.find('dd').slideUp();
			$(this).addClass('on');
			$(this).find('dd').slideDown();
		}
	});

	$('.label_chk, .label_radio').on('click', function() {
		setupLabel();
	});
	setupLabel('.label_chk');
	setupLabel('.label_radio');
	
});
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