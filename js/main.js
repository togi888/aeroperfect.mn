jQuery(document).ready(function($){
	$(".slider_range").on("input change",t=>{
		var e=t.target.value/10,
		t=t.target.closest(".slider_wrap");
		$(t).find(".foreground-img").css("width",e+"%"),
		$(t).find(".slider-button").css("left",e+"%")
	});

	$('.ap_3 .slide_view_btn').click(function (){
		let btn = $(this);
		if(!btn.closest('.ap_3_row').hasClass('slide_on')){
			btn.closest('.ap_3_row').addClass('slide_on');
		}
		else{
			btn.closest('.ap_3_row').removeClass('slide_on');
		}
		
	});

	$('.go_to').click(function(e) {
	    var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top;
	    $('html, body').stop().animate({
	      scrollTop: offsetTop - 80 
	    }, 800);    
	    e.preventDefault();	   
	});
	$('.video_thumb .play_video').click(function () {
		var href = $(this).attr('data-video-id');
		//$(this).closest('.video_thumb').hide();
		$('.video_player').show();
		$('.video_player iframe').attr('src', href);
		return false;
	});

	$('.recommendet_products_carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
    ]
  });

});
