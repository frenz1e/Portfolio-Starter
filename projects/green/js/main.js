$(function(){

	// main slider

	var mainSlider = $('.main-slider-list');
	var mainSliderTimeout = 3000;

	mainSlider.owlCarousel({
	    loop:true,
	    nav:true,
	    items: 1,
	    smartSpeed: 400,
	    touchDrag: false,
	    mouseDrag: false,
	    autoplay: true,
	    autoplayTimeout: mainSliderTimeout,
	    autoplayHoverPause: true
	});


	// brands slider

	var brandsSlider = $('.mp-brands-slider');

	brandsSlider.owlCarousel({
	    loop:true,
	    nav:true,
	    smartSpeed: 400,
	    items: 6,
	    margin: 10
	});

	// popups

	$('.main-slider__more').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-zoom-in',
		callbacks: {
			open: function(){
				window.setTimeout(function(){
					mainSlider.trigger('stop.owl.autoplay');
				}, 500)
			},
			close: function(){
				mainSlider.trigger('autoplay.play.owl',[mainSliderTimeout]);;
			}
		}

    });

    // titles scroll-to

    $('.mp-block-title').on('click', function(event) {

    	var offset = 10;
    
    	event.preventDefault();
    
    	$('html, body').animate({
	        scrollTop: $(this).offset().top - offset
	    }, 600);

    });

});