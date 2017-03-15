$.fn.tab=function (){
	this.each(function (index,element){
		var aBtn=$(this).find('.tab nav a');
		var oMoveDiv=$(this).find('.ques_box');
		var oBox=$(this);
		var iNow=0;
   
		function btn(){
			$(aBtn).removeClass('on');
			$(aBtn).eq(iNow).addClass('on');
			
			var x=-iNow*$('.ques_box').eq(0).width();
			$(oMoveDiv).css({
				transform:'translate('+x+'px,0)'
			});
		}
		
		$(aBtn).tap(function (){
			iNow=$(this).index();
			
			btn();
		});
		$(oMoveDiv).swipeLeft(function (){
			iNow++;
			if(iNow==$(this).children('.ques_box').length){
				iNow=$(this).children('.ques_box').length-1;
			}
			var x=-iNow*$('.ques_box').eq(0).width();
			$(this).css({
				transform:'translate('+x+'px,0)'
			});
			btn();
		});
		$(oMoveDiv).swipeRight(function (){
			iNow--;
			if(iNow==-1){
				iNow=0;
			}
			var x=-iNow*$('.ques_box').eq(0).width();
			$(this).css({
				transform:'translate('+x+'px,0)'
			});
			btn()
		});
	});
}
$(function (){
	$('.tab').tab();
});