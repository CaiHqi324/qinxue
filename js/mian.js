	
	//样式27代码
	var swiper = new Swiper('.yx_box27 >.swiper-container', {
		slidesPerView: 3,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	//样式28代码
	var galleryTop = new Swiper('.ys_box28 >.gallery-top', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.ys_box28 >.gallery-top >.swiper-button-next',
			prevEl: '.ys_box28 >.gallery-top >.swiper-button-prev',
		},
	});
	var galleryThumbs = new Swiper('.ys_box28 >.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		touchRatio: 0.2,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		slideToClickedSlide: true,
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;

	function Lli(Lli) {
		var Lileng = $(Lli).length;
		if(Lileng = 4) {
			$(Lli).css("width", "25%");
		}
	}
	Lli('.ys_box28 >.gallery-top >.swiper-wrapper >.swiper-slide >ul >li');

	
	var tabsSwiper = new Swiper('.ys_box34 >#tabs-container', {
		speed: 500,
		on: {
			slideChangeTransitionStart: function() {

				$(".ys_box34 >.tabs .active").removeClass('active');
				$(".ys_box34 >.tabs a").eq(this.activeIndex).addClass('active');
			}
		}
	})
	$(".tabs a").on('click', function(e) {
		e.preventDefault()
		$(".tabs .active").removeClass('active')
		$(this).addClass('active')
		tabsSwiper.slideTo($(this).index())
	})

	function lRheight1(lRlenght, lheight, Zheight, Rheight) {
		var A = $(lRlenght);
		for(var i = 0; i < A.length; i++) {
			var leftheight = A.eq(i).find(lheight).outerHeight();
			var conheight = A.eq(i).find(Zheight).outerHeight();
			var rightheight = A.eq(i).find(Rheight).outerHeight();

//			console.log(leftheight);
//			console.log(conheight);
//			console.log(rightheight);

			var mh = Math.max(leftheight, conheight, rightheight); //比较hl与hr的高度，并将最大值赋给变量mh
			A.eq(i).find(lheight).outerHeight(mh); //将left层高度设为最大高度mh  
			A.eq(i).find(Zheight).outerHeight(mh); //将right层高度设为最大高度
			A.eq(i).find(Rheight).outerHeight(mh); //将right层高度设为最大高度
//			console.log(mh);
		}
	}
	lRheight1('.ys_box28', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(1) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(2) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(3) >.group');
	lRheight1('.ys_box29', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(1) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(2) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(3) >.group');
	lRheight1('.ys_box30', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(1) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(2) >.group', '.swiper-wrapper >.swiper-slide >ul >li:nth-child(3) >.group');
//33
	var swiper = new Swiper('.swiper-container32',{
		slidesPerView: 3,
		spaceBetween: 20,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			}
		}
	});


//多个div等高
function DdengG(A,B){
	if($(A).length>0){
		var Ddg = $(A);
		for (var i=0;i<Ddg.length;i++)
		{
			var heightData = new Array();//对象数组  
			Ddg.eq(i).find(B).each(function(j){//遍历  
				heightData.push($(this).outerHeight());
			})  
			heightData.sort(function(value1, value2) {//数组排序  
				return value1 - value2;  
			});  
			Ddg.eq(i).find(B).outerHeight(heightData[heightData.length-1]);
		}
		return false;
	}
}
//DdengG('.ys_box36.box9','.con');

//36  6.7.8.9
function box36(A,B,C){
	var swiper = new Swiper(A, {
	  slidesPerView: B,
	  slidesPerColumn: C,
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	});
}
box36('.ys_box36.box9 >.swiper-container','3','3');
box36('.ys_box36.box8 >.swiper-container','4','2');
box36('.ys_box36.box7 >.swiper-container','4','2');
box36('.ys_box36.box6 >.swiper-container','3','2');
box36('.ys_box36.box5 >.swiper-container','3','2');
box36('.ys_box36.box5_2 >.swiper-container','3','2');

//36 box5_2
var H_36 = $('.ys_box36.box5_2 >.swiper-container >.swiper-wrapper >.swiper-slide.li02').outerHeight()*2;
var HM_36 = $('.ys_box36.box5_2 >.swiper-container >.swiper-wrapper >.swiper-slide.li02').outerHeight();
$('.ys_box36.box5_2 >.swiper-container >.swiper-wrapper >.swiper-slide.li01 .con').outerHeight(H_36);
$('.ys_box36.box5_2 >.swiper-container >.swiper-wrapper >.swiper-slide.li02').css('margin-top',-HM_36);
$('.ys_box36.box5_2 >.swiper-container >.swiper-wrapper >.swiper-slide.li04').css('margin-top',-HM_36);



//36
var swiper = new Swiper('.ys_box36.box4 >.swiper-container36', {
	slidesPerView: 4,
	spaceBetween: 0,
});
var swiper = new Swiper('.ys_box36.box3 >.swiper-container36', {
	slidesPerView: 3,
	spaceBetween: 0,
});
var swiper = new Swiper('.ys_box36.box2 >.swiper-container36', {
	slidesPerView: 2,
	spaceBetween: 0,
});

function TYtab(box, tab, con, h) {
	if(h=="hover"){
		$(tab).hover(function() {
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(box).find(con).eq(index).show().siblings().hide();
		})
	}else{
		$(tab).on("click", function() {
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(box).find(con).eq(index).show().siblings().hide();
		})
}
}
TYtab('.ys_box31', '.tit >ul >li', '.con >ul >li');
TYtab('.ys_box32', '.tit >ul >li', '.con >ul >li');
TYtab('.ys_box43', '.tit >ul >li', '.con >ul >li');
TYtab('.ys_box53', '.details-outfit-tab >li', '.details-outfit-main >ul');
TYtab('.ys_box54', '#memberI_nav >.swiper-wrapper >.swiper-slide', '#memberI_page >.swiper-wrapper >.swiper-slide');
TYtab('.ys_box58', '.ys_box58>.tab>span', '.swiper-container>.swiper-wrapper>.swiper-slide','hover');


	
var tabsSwiper = new Swiper('.ys_box29 >#tabs-container', {
		speed: 500,
		on: {
			slideChangeTransitionStart: function() {

				$(".tabs .active").removeClass('active');
				$(".tabs a").eq(this.activeIndex).addClass('active');
			}
		}
	})
	$(".tabs a").on('click', function(e) {
		e.preventDefault();
		$(".tabs .active").removeClass('active');
		$(this).addClass('active');
		tabsSwiper.slideTo($(this).index());
	})


$(document).ready(function(){
    $(".ys_box44 >.center >.tab_tit >ul >li").hover(function(){
 	   $(".ys_box44 >.center >.tab_tit >ul >li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".ys_box44 >.center >.con >ul >li").hide().eq($(this).index()).show();
    });
});

var swiper = new Swiper('.ys_box45 >.swiper-container', {
direction: 'vertical',
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});

function autoscroll(obj){
    $(obj).find("ul:first").animate({marginTop:"-135px"},1000,function(){
      $(this).css("marginTop","0px").find("li:first").appendTo(this)
    })
}
setInterval('autoscroll("#scrollDiv")',1500)


$(".ys_box48 >ul >li >span").click(function(){
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    if ($('.ys_box48 >ul >li').is('.active')) {
    	$(this).parent().find('label').html('-');
    	$(this).parent().siblings().find('label').html('+');
    }
})
$(function(){
//			    gaodu= gaodu.replace(/[^0-9]/ig,""); 
  $(".hi_btn").click(function(){

  	var ss=$(this).html();
  	if(ss=="阅读全文<em>↓</em>"){
	$(this).parent().children(".hi_show").css("height","auto");
	$(this).parent().children().children(".hi_shadow").hide();
	$(this).html("收起<em>↑</em>");
	}
  	else if(ss=="收起<em>↑</em>"){
  		$(this).parent().children(".hi_show").css("height","180px");
//		      		$(this).parent().children().children(".hi_shadow").show();
	    $(this).html("阅读全文<em>↓</em>");
	     $('body,html').animate({
		      scrollTop: $(".hi_box").offset().top-100
		    },
		    1000);
		    return false;
        }
})
})


var swiper = new Swiper('.ys_box54 >.swiper-container', {
	slidesPerView: 'auto',
    direction: 'vertical',
    noSwipingClass : 'stop-swiping',
});



$(function () {
	
  $('.ys_box61>.swiper-wrapper>span.btn').click(function () {
       var btnIndex = $(this).index(),
        picElement = $('.ys_box61>.swiper-wrapper>.swiper-slide'),
        picNum = picElement.length,
        lastPic = picElement.eq(picNum - 1).attr('class'),
        firstPic = picElement.eq(0).attr('class'),
        temp;
        console.log(btnIndex);
    if (btnIndex == 0) { //下一张
      for (var index = picNum; index >= 0; index--) {
        temp = picElement.eq(index - 1).attr('class');
        if (index == 0) {
          picElement.eq(index).attr('class', lastPic);
        } else {
          picElement.eq(index).attr('class', temp);
        }
      }
    } else { //上一张
      for (var j = 0; j < picNum; j++) {
        temp = picElement.eq(j + 1).attr('class');
        if (j == picNum - 1) {
          picElement.eq(j).attr('class', firstPic);
        }
        else {
          picElement.eq(j).attr('class', temp);
        }
      }
    }
    $(".ys_box61>.introduction").html($(".ys_box61>.swiper-wrapper>.swiper-slide.current>div").html());
  })
if($(".ys_box61>.swiper-wrapper>.swiper-slide>div").length>0){
	$(".ys_box61>.introduction").html($(".ys_box61>.swiper-wrapper>.swiper-slide.current>div").html());
}
$(".ys_box70>ul>li").hover(function(){
	$(".ys_box70>ul>li").removeClass("side");
	$(".ys_box70>ul>li").eq($(this).index()).addClass("side");
})

})
