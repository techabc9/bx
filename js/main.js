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
		fn=1;
	});
}
function tab(s1,s2,t){
	$(s1).hide();
	$(s2).show();
	$(t).parent().addClass('on');
	$(t).parent().siblings().removeClass('on');
}
$(document).ready(function(){
	// 네비게이션
	var top_height=121;
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
			}, 800, "easeInExpo", function() {
				fn=0;
			});
		}
	}
	function navSet(v){
		var cont_offset=new Array();
		var cont_length = $('.full_section').length;
		bgTemp='';
		for (var i=0;i<=cont_length-1;i++){
			cont_offset[i] = $('.full_section').eq(i).offset().top;
			if (cont_offset[i] - top_height - 1 <= v){
				$('#Nav li').removeClass('on');
				$('#Nav li[data-cont='+i+']').addClass('on');
				$('#Nav li[data-cont='+i+']').parents('li').addClass('on');
				nav_on = i;
				if ($('.full_section').eq(i).attr('data-bg') == 'n'){
					$('#bgBtm').attr('class','skin_btm');
				}else{
					$('#bgBtm').attr('class','skin_btm '+$('.full_section').eq(i).attr('data-skin')).fadeIn();
				}
			}
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
			});
		}
	});

	$('.sel_family').on('click',function(){
		$(this).find('ul').toggle();
	});

	

	$('#cont_mov .toggle').on('click',function(){
		$('#cont_mov').toggleClass('mov_off');
		$('#cont_mov .mov_area').slideToggle();
	});
	

	$('#Nav > li').on('mouseenter mouseleave focusin focusout', function(e) {
		var _this=$(this);
		if(e.type === 'mouseenter' || e.type === 'focusin'){
			var timer = window.setTimeout(function () {
				$('#Nav > li').removeClass('on');
				_this.addClass('on');
			}, 200);
			_this.data('timerid', timer);
		}else if(e.type === 'mouseleave' || e.type === 'focusout'){
			$('#Nav > li').removeClass('on');
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