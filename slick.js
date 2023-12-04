var pageid="";
var device="pc";
var fromP;

$(function(){
	pageid=$('body').attr('id');
	$(document).ready(function(){
		fromP = fromCurrentSite();
		devicejuage();
		loading();
	});
	
	function fromCurrentSite(){
		var value = document.referrer;
		var domain = document.domain;
		var ret = false;
		if ( value.match(domain)) {
			ret = true;
		 }
		return ret;
	}

	function devicejuage(){
		if (window.matchMedia('(max-width: 767px)').matches) {
			device="sp";

		} else if (window.matchMedia('(min-width:767px)').matches) {			
			device="pc";
		}
	}

	$(window).resize(function(){
		devicejuage();
	});

	function loading(){
         if(pageid=="home"){
             if (window.matchMedia('(max-width: 767px)').matches) {
                setTimeout(function(){
					 TweenMax.fromTo($('#loadingLogo'), 1.5, {  scale: 1},{ opacity:'1', scale: 1, delay:0,ease: Power2.easeOut});
				
					  TweenMax.fromTo($('#loading'), 2.0, { opacity:'1'},{ opacity:'0',delay:2, ease:"Linear", onComplete: function(){
					  $('#loading').css({'display':'none'});
				  }});
				},500);
             }else{
                setTimeout(function(){			
					  TweenMax.fromTo($('#loading'), 1.0, { opacity:'1'},{ opacity:'0',delay:0.5, ease:"Linear", onComplete: function(){
					  $('#loading').css({'display':'none'});
				  }});
				},0);
             }
		}else{
			setTimeout(function(){			
					  TweenMax.fromTo($('#loading'), 1.0, { opacity:'1'},{ opacity:'0',delay:0.5, ease:"Linear", onComplete: function(){
					  $('#loading').css({'display':'none'});
				  }});
				},0);
		}


	}
    var open=false;
	$('.btn_open').click(function(e) {
		drowerToggle(open);
		e.stopPropagation();
	});
	
	var offsetY = window.pageYOffset;
	function drowerToggle(bl){
		if(bl==false){
			$('body').toggleClass('open');
			offsetY = window.pageYOffset;
			$('body').css({
				position: 'fixed',
				'top': -offsetY + 'px',
				width: '100%'
			  });

			TweenMax.fromTo($('.global_nav_sp'), 0.5, {
				   opacity:'0'
				},{
				   opacity:'1',  delay:0,  ease: Power0.easeNone, onComplete:function(){
					   open=true;
				   } 
			});

		}else if(bl==true){

			TweenMax.fromTo($('.global_nav_sp'), 0.3, {
				   opacity:'1'
			},{
				   opacity:'0',  delay:0,  ease: Power0.easeNone, onComplete:function(){
					   $('body').removeClass('open');
					   $('body').css({
						'position': 'static',
						'top': 'auto',
						'width': 'auto'
					  });
					  $(window).scrollTop(offsetY);
					   open=false;
				   } 
			});

		}
	}

	$(function(){
	  $(window).on('scroll load',function (){
		$(".js-scroll-fade:not(.isActive)").each(function(){
		  var imgPos = $(this).offset().top;
		  var scroll = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  if (scroll > imgPos - windowHeight + windowHeight/8){
			$(this).addClass('isActive');
		  } else {
			$(this).removeClass("isActive");
		  }
		});
	  });
	});

	var ptop = $('.pc_nav_logo, .sp_header_bg, .sp_header_logo, .header_btn_store, .btn_humberger_box'),
	offset = ptop.offset();
	$(window).on('scroll load',function () {
	  if($(window).scrollTop() > 100) {
		ptop.addClass('active');
	  } else {
		ptop.removeClass('active');
	  }
	});
    
	$('a[href^=#]').click(function() {
	 var adjust = 0;
      var speed = 600;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      $('.pagetop').addClass('scroll');
      return false;
   });

	var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel-link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
	
});
