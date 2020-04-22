//33
	var swiper = new Swiper('.swiper-container32', {
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
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			}
		}
	});
//36
	var swiper = new Swiper('.swiper-container36', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true, 
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
	});
		
	
	
	//34
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

	
//	//样式27代码
	var swiper = new Swiper('.yx_box27 >.swiper-container', {
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    //样式28代码
	var galleryTop = new Swiper('.ys_box28 >.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.ys_box28 >.gallery-top >.swiper-button-next',
        prevEl: '.ys_box28 >.gallery-top >.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.ys_box28 >.gallery-thumbs', {
      spaceBetween: 1,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
	//定头部
	function Navtab(Toptab,Topcon){
		var Top = $(Toptab).offset().top;
		var Toph = $(Toptab).height();
		var HTop = $(Toptab).offset().top + $(Topcon).outerHeight() - Toph;
		$(window).scroll(function() {
			var Stop = $(window).scrollTop();
			if(Stop >= Top){
				$(Toptab).addClass('Tfixed');
			}else{
				$(Toptab).removeClass('Tfixed');
			}
			if( Stop >= HTop){
				$(Toptab).removeClass('Tfixed');
			}
	    });
	}
	Navtab('.ys_box28 >.gallery-thumbs','.ys_box28');
	Navtab('.ys_box29 >.tabs','.ys_box29');
	Navtab('.ys_box31 >.tit','.ys_box31');
	Navtab('.ys_box32 >.tit','.ys_box32');

	//样式29
	var tabsSwiper = new Swiper('.ys_box29 >#tabs-container',{
	    speed:500,
	    on:{
			slideChangeTransitionStart: function(){
			  
	          $(".tabs .active").removeClass('active');
	          $(".tabs a").eq(this.activeIndex).addClass('active');
	    }
		}
	  })
	  $(".tabs a").on('click',function(e){
	    e.preventDefault()
	    $(".tabs .active").removeClass('active')
	    $(this).addClass('active')
	    tabsSwiper.slideTo( $(this).index())
	})

function TYtab(box,tab,con){
    $(tab).on("click",function(){
	    var index = $(this).index();
	    $(this).addClass("active").siblings().removeClass("active"); 
	    $(this).parents(box).find(con).eq(index).show().siblings().hide();
    })
}
TYtab('.ys_box31','.tit >ul >li','.con >ul >li');
TYtab('.ys_box32','.tit >ul >li','.con >ul >li');
TYtab('.ys_box43','.tit >ul >li','.con >ul >li');
TYtab('.ys_box53', '.details-outfit-tab >li', '.details-outfit-main >ul');

$(document).ready(function(){
    $(".ys_box44 >.center >.tab_tit >ul >li").click(function(){
 	   $(".ys_box44 >.center >.tab_tit >ul >li").eq($(this).index()).addClass("active").siblings().removeClass('active');
		$(".ys_box44 >.center >.con >ul >li").hide().eq($(this).index()).show();
    });
});

var swiper = new Swiper('.ys_box45 >.swiper-container', {
	spaceBetween: 0,
	autoHeight: true,
	pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	},
});


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

var swiper = new Swiper('.ys_box52 >.swiper-container', {
  slidesPerView: 1.2,
  spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});






/**
 会员首页课程导航切换
**/
	barwidth = 36 //导航粉色条的长度px
	tSpeed = 300 //切换速度300ms
	var navSwiper = new Swiper('#memberI_nav', {
		slidesPerView: 4,
		freeMode: true,
	  	autoHeight: true,
		on: {
	  		init: function() {
	  			navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度一致
	  			bar = this.$el.find('.bar')
	  			bar.css('width', navSlideWidth)
	  			bar.transition(tSpeed)
	  			navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置
	
	  			clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
	  			navWidth = 0
	  			for (i = 0; i < this.slides.length; i++) {
	  				navWidth += parseInt(this.slides.eq(i).css('width'))
	  			}
	
	  			topBar = this.$el.parents('body').find('#top') //页头
	
	  		},
	
	  	},
	});
	var pageSwiper = new Swiper('#memberI_page', {
	  	watchSlidesProgress: true,
	  	resistanceRatio: 0,
	  	autoHeight: true,
	  	on: {
	  		touchMove: function() {
	  			progress = this.progress
	  			bar.transition(0)
	  			bar.transform('translateX(' + navSum * progress + 'px)')
	  			//粉色255,72,145灰色51,51,51
	  			for (i = 0; i < this.slides.length; i++) {
	  				slideProgress = this.slides[i].progress
	  				if (Math.abs(slideProgress) < 1) {
	  					r = Math.floor((6 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
	  					g = Math.floor((139 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
	  					b = Math.floor((242 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
	  					navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
	  				}
	  			}
	  		},
	  		transitionStart: function() {
	  			activeIndex = this.activeIndex
	  			activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
	  			//释放时导航粉色条移动过渡
	  			bar.transition(tSpeed)
	  			bar.transform('translateX(' + activeSlidePosition + 'px)')
	  			//释放时文字变色过渡
	  			navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
	  			navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(6,139,242,1)')
	  			if (activeIndex > 0) {
	  				navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
	  				navSwiper.slides.eq(activeIndex - 1).find('span').css('color', 'rgba(51,51,51,1)')
	  			}
	  			if (activeIndex < this.slides.length) {
	  				navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
	  				navSwiper.slides.eq(activeIndex + 1).find('span').css('color', 'rgba(51,51,51,1)')
	  			}
	  			//导航居中
	  			navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离
	
	  			navSwiper.setTransition(tSpeed)
	  			if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
	  				navSwiper.setTranslate(0)
	  			} else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
	  				navSwiper.setTranslate(clientWidth - navWidth)
	  			} else {
	  				navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
	  			}
	
	  		},
	  	}
	  });
	navSwiper.$el.on('touchstart', function(e) {
  	e.preventDefault() //去掉按压阴影
	})
	navSwiper.on('tap', function(e) {
	  	clickIndex = this.clickedIndex
	  	clickSlide = this.slides.eq(clickIndex)
	  	pageSwiper.slideTo(clickIndex, 0);
	  	this.slides.find('span').css('color', 'rgba(51,51,51,1)');
	  	clickSlide.find('span').css('color', 'rgba(6,139,242,1)');
	})
	var swiper57 = new Swiper('.swiper_57',
	{
  slidesPerView: 2,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination_57',
    clickable: true,
  },
});



var swiper58 = new Swiper('.swiper_58',
	{
	on:{
		slideChangeTransitionStart: function(){			
          $(".ys_box58>.tab>span").removeClass('active');
          $(".ys_box58>.tab>span").eq(this.activeIndex).addClass('active');
    }
	}
});
$(".ys_box58>.tab>span").on('click', function(e) {
		e.preventDefault()
		$(".ys_box58>.tab>span").removeClass('active')
		$(this).addClass('active')
		swiper58.slideTo($(this).index())
})
var swiper61 = new Swiper('.ys_box61', {
	 pagination: {
    el: '.introduction',
  },
});

if($(".ys_box80").length>0){
	var swiper80 = new Swiper('.ys_box80',
	{
  pagination: {
    el: '.swiper-pagination_80',
  },
});
}
if($(".ys_box81").length>0){
	var swiper80 = new Swiper('.ys_box81.slider',
	{
 pagination: {
    el: '.swiper-pagination_81',
  },
});
}