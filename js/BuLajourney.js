/**************************overall***************************/
;(function(d){
	var	_winH = $(window).height(),
		_footerH = $('footer').height(),
		_wrapH = _winH -_footerH,
		a = _winH / 10;
	$("#wrap").css({
		height:_wrapH
	})
	$("#page6").css({
		height:_winH
	})
})(document)	
/***footer change page***/
;(function(d){
	var btns = d.querySelectorAll('.btn');
	var contents = d.querySelectorAll('.content');
	for(var i=0,len=btns.length;i<len;i++){
		(function(index){
			btns[index].addEventListener('click',function(){
				for(var j=0;j<len;j++){
					contents[j].classList.remove('active');
					btns[j].classList.remove('active');
				}
				if (index == 1) {
					$('#page2 .placeList').addClass('animated fadeInLeftBig');
					$('#page2 .title').addClass('animated flipInY');
				}
				if (index == 2) {
					$('#page3 h3').addClass('animated bounceInRight');
					$('#page3 li').addClass('animated bounceInRight');
				}
				if (index == 4) {
					$('#page5 .other li').addClass('animated bounceInUp');
				}
				contents[index].classList.add('active');
				this.classList.add('active');
			},false)
		})(i);
	}
})(document)	
/************** page1 start****************/
/*** banner ***/
;(function(d){
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationType:'bullets',
	    paginationClickable: true,
	    autoplay: 2500,
	    autoplayDisableOnInteraction: false
	});
})(document)
/*** 快闪 & 闪购 ***/
;(function(d){
	var quickSalesBtn = $(".quickSales_btn ul li");
	quickSalesBtn.click(function(){
		var _index = $(this).index();
		 $(".qSc_b").eq(_index).addClass('active').siblings().removeClass('active')
		if(_index == 0){
			$('.quickSales_btn div').addClass('active2').removeClass('active')
		}else{
			$('.quickSales_btn div').addClass('active').removeClass('active2')
		}
	})
})(document)
/*******搜索*********/
$("#page1 .icon-sousuo").on('click',function(){
		$('footer').removeClass('active');
		$('#page7').addClass('active').siblings().removeClass('active');
})
/************** page1 end****************/




/************************************ 跳转详细内容 ************************************/
/************page1 start***********/
$(".swiper-slide").on('click',function(){
	//获取滚动条的高度,令其为0
//	if($('#page7').scrollTop() != 0){
//		$('#page7').scrollTop() = 0;
//	}
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$("#page1 .preferential li img").on('click',function(){
	//获取滚动条的高度,令其为0
//	if($('#page7').scrollTop() != 0){
//		$('#page7').scrollTop() = 0;
//	}
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$("#page1 .qSc_b").on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
/************page1 end***********/

/************page2 start***********/
$("#page2 li").on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$("#page2 .hotPlace").on('click',function(){
	$('#page3').addClass('active').siblings().removeClass('active');
	$('#page3 h3').addClass('animated bounceInRight');
	$('#page3 li').addClass('animated bounceInRight');
})
/************page2 end***********/

/************page3 start***********/
$('#page3 .search').on('click',function(){
	$('.history .non').remove();
	var $txt = $('#page3 .search_box input').attr('value');
	$('.history div').append('<p>'+ $txt+'</p>')
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$('#page3 .selectTheme .iconfont').on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$('#page3 .hotPlace li').on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
/************page3 end***********/


/************page4 start***********/
$("#page4 .txt").on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
$("#page4 .buy img").on('click',function(){
	$('footer').removeClass('active');
	$('#page7').addClass('active').siblings().removeClass('active');
})
/************page4 end***********/

/************page5 start***********/
$('#page5 li').on('click', function() {
	$('footer').removeClass('active');
	$('#page5').removeClass('active');
	$('#page6').addClass('active');
})
$('#page5 .baseIntro i').on('click', function() {
	$('footer').removeClass('active');
	$('#page5').removeClass('active');
	$('#page6').addClass('active');
})	
/************page5 end***********/

/************page6 start***********/
$('#page6 .icon-jiantouzuo').on('click',function(){
	$('#page6').removeClass('active');
	$('footer').addClass('active');
	$('#page5').addClass('active');
	$('#page5 .other').addClass('animated bounceInUp');
})
	
	
	
	
	
	
	
	
	
/************page6 end**********/

/************page7 start***********/
	$('#page7 .icon-jiantouzuo').on('click',function(){
		$('footer').addClass('active');
		$('#page7').removeClass('active');
		$('#page1').addClass('active');
	})
	$('#page7 .icon-fenxiang').on('click',function(){
		$('#page7').removeClass('active');
		$('#page6').addClass('active');
		
	})
/************page7 end***********/



/*******iscroll******/
//var myScroll;
//function loaded() {
//	myScroll = new IScroll('#wrapper', {
//		bounceEasing: 'elastic',
//		bounceTime: 1200
//	});
//}
//document.addEventListener('touchmove', function(e) {
//	e.preventDefault();
//}, false);







