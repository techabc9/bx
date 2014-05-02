function isValidEmail(s) {
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	return (pattern.test(s));
}


function printPagingTemplate(currentPage, totalCount, rowsPerPage, pagingObject){
	
	var FirstPage = 1;
	var LastPage = parseInt((totalCount-1) / rowsPerPage) + 1 ;
	
	if (LastPage == 0 ) {LastPage = 1;}
	
	if (currentPage > LastPage) { currentPage = LastPage ; }
	var PrePage = currentPage - 1;
	if ( PrePage <= 0 ) { PrePage = 1; }
	var NextPage = currentPage + 1;
	if ( NextPage > LastPage ){ NextPage = LastPage ; }
	var FirstTab = 0;
	if ( currentPage % rowsPerPage == 0 ) {
		FirstTab = currentPage - rowsPerPage + 1;
	} else {
		FirstTab = currentPage - ( currentPage % rowsPerPage ) + 1;
	}
	var LastTab = FirstTab + rowsPerPage -1;
	if ( LastTab > LastPage ){
		LastTab = LastPage;
	}
	
	var pageHtml = '';

	if(totalCount > 0){
		if(currentPage == 1){
			pageHtml += '	<a class="prev2"><span class="blind">첫페이지</span></a>\n';
			pageHtml += '	<a class="prev"><span class="blind">이전페이지</span></a>\n';
		}else{
			pageHtml += '	<a class="prev2" style="cursor:pointer" currentPage="1"><span class="blind">첫페이지</span></a>\n';
			pageHtml += '	<a class="prev" style="cursor:pointer" currentPage="'+ (parseInt(currentPage) - 1) +'"><span class="blind">이전페이지</span></a>\n';
		}
	
		for(var i=FirstTab; i<=LastTab; i++){
			if (i == currentPage ){
				pageHtml += '	<strong>'+ i +'</strong>\n';
			} else {
				pageHtml += '	<a currentPage="'+ i +'" style="cursor:pointer">'+ i +'</a>\n';
			}
		}
	
		if(currentPage == LastPage){
			pageHtml += '	<a class="next"><span class="blind">다음페이지</span></a>\n';
			pageHtml += '	<a class="next2"><span class="blind">마지막페이지</span></a>\n';
		}else{
			pageHtml += '	<a class="next"  style="cursor:pointer" currentPage="'+ (parseInt(currentPage) + 1) +'"><span class="blind">다음페이지</span></a>\n';
			pageHtml += '	<a class="next2" style="cursor:pointer"  currentPage="'+ parseInt(LastPage) +'"><span class="blind">마지막페이지</span></a>\n';
		}
	}
	
	$(pagingObject).html(pageHtml);
	
}



