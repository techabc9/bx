$(document).ready(function(){
	$('#faqList > li').on('click', function(e) {
		if(e.type === 'click' && $(this).hasClass('on') == false){
			$('#faqList > li').removeClass('on');
			$('#faqList > li').find('dd').slideUp();
			$(this).addClass('on');
			$(this).find('dd').slideDown();
		}
	});
});
