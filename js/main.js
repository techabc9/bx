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
			}
		}
		if ($('.full_section').eq(nav_on).attr('data-bg') == 'n'){
			$('#bgBtm').animate({'opacity':0},function(){$(this).attr('class','skin_btm')});
		}else{
			$('#bgBtm').attr('class','skin_btm '+$('.full_section').eq(nav_on).attr('data-skin')).animate({'opacity':1});
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
					m_cat_h();
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

	//모바일 nav
	/*$('#mTopNav .nav_btn > li').on('click', function(e) {
		$('#mTopNav .nav_btn > li').removeClass('on');
		$(this).toggleClass('on');
	});*/
	$('#mTopNav li a').on('click', function(e){
		if ($(this).next().hasClass('dep2') == true){
			$('#mTopNav .nav_btn > li').removeClass('on');
			$(this).parent().addClass('on');
			return false;
		}else{
			goToSlider($(this).attr('href'));
			m_cat_h();
			return false;
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

	//footer
	$('#footerWrap').on('mouseenter mouseleave focusin focusout', function(e) {
		var _this=$(this);
		if ($(window).width()>=640){
			if(e.type === 'mouseenter' || e.type === 'focusin'){
				var timer = window.setTimeout(function () {
					_this.find('.footer').animate({'top':'27px'})
				}, 200);
				_this.data('timerid', timer);
			}else if(e.type === 'mouseleave' || e.type === 'focusout'){
				_this.find('.footer').animate({'top':'100px'},function(){
					$('.sel_family ul').hide();
				});
				var timerid = _this.data('timerid');
				clearTimeout(timerid);
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
	$('#btnCat').on('click', function() {
		if ($('#mTopNav').css('display') == 'none'){
			m_cat()
		}else{
			m_cat_h()
		}
	});
	
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

function m_cat(){
	goTop();
	$('#wrapBody,.m_top_nav_w').animate({
		left: '-60%'
	},200);
	$('#mTopNav').show().animate({
		right: '0',
		width:'60%',
		height:$('#wrapBody').height()
	},200);
}

function m_cat_h(){
	$('#wrapBody,.m_top_nav_w').animate({
		left: '0'
	},200);
	$('#mTopNav').hide().animate({
		right: '-100%',
		width:'60%'
	},200);
}

function callPlayer(frame_id, func, args) {
    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }

    // When the player is not ready yet, add the event to a queue
    // Each frame_id is associated with an own queue.
    // Each queue has three possible states:
    //  undefined = uninitialised / array = queue / 0 = ready
    if (!callPlayer.queue) callPlayer.queue = {};
    var queue = callPlayer.queue[frame_id],
        domReady = document.readyState == 'complete';

    if (domReady && !iframe) {
        // DOM is ready and iframe does not exist. Log a message
        window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
        if (queue) clearInterval(queue.poller);
    } else if (func === 'listening') {
        // Sending the "listener" message to the frame, to request status updates
        if (iframe && iframe.contentWindow) {
            func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
            iframe.contentWindow.postMessage(func, '*');
        }
    } else if (!domReady ||
               iframe && (!iframe.contentWindow || queue && !queue.ready) ||
               (!queue || !queue.ready) && typeof func === 'function') {
        if (!queue) queue = callPlayer.queue[frame_id] = [];
        queue.push([func, args]);
        if (!('poller' in queue)) {
            // keep polling until the document and frame is ready
            queue.poller = setInterval(function() {
                callPlayer(frame_id, 'listening');
            }, 250);
            // Add a global "message" event listener, to catch status updates:
            messageEvent(1, function runOnceReady(e) {
                if (!iframe) {
                    iframe = document.getElementById(frame_id);
                    if (!iframe) return;
                    if (iframe.tagName.toUpperCase() != 'IFRAME') {
                        iframe = iframe.getElementsByTagName('iframe')[0];
                        if (!iframe) return;
                    }
                }
                if (e.source === iframe.contentWindow) {
                    // Assume that the player is ready if we receive a
                    // message from the iframe
                    clearInterval(queue.poller);
                    queue.ready = true;
                    messageEvent(0, runOnceReady);
                    // .. and release the queue:
                    while (tmp = queue.shift()) {
                        callPlayer(frame_id, tmp[0], tmp[1]);
                    }
                }
            }, false);
        }
    } else if (iframe && iframe.contentWindow) {
        // When a function is supplied, just call it (like "onYouTubePlayerReady")
        if (func.call) return func();
        // Frame exists, send message
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }
    /* IE8 does not support addEventListener... */
    function messageEvent(add, listener) {
        var w3 = add ? window.addEventListener : window.removeEventListener;
        w3 ?
            w3('message', listener, !1)
        :
            (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
    }
}
var playerState=true;
function playToggle(){
	if (playerState == true){
		callPlayer('Player','pauseVideo');
		playerState=false;
	}else{
		callPlayer('Player','playVideo');
		playerState=true;
	}
	console.log(playerState);
}