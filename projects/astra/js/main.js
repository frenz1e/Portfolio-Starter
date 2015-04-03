(function($){
    $(function() {
       

    	$(".has-subm").on("mouseenter", function(){
    		$(this).addClass("hov");
    		$(".submenu", this).show();
    	});

    	$(".has-subm").on("mouseleave", function(){
    		$(this).removeClass("hov");
    		$(".submenu", this).hide();
    	})

	    $('ul.tabs').delegate('li.tabli:not(.current)', 'click', function() {
            $(this).addClass('current').siblings().removeClass('current').parents('.tab-section').find('.box').hide().eq($(this).index()).fadeIn(150);

			return false;
	    });

        $('ul.news-tabs').delegate('li.news-tabli:not(.current)', 'click', function() {
            $(this).addClass('current').siblings().removeClass('current').parents('.news-tab-section').find('.news-box').hide().eq($(this).index()).fadeIn(150);

            return false;
        });

        $('.slides').slidesjs({
            navigation: false,
            play: {
                active: true,
                interval: 3000,
                auto: true
            }
        });


        $('.wide-slider').slidesjs({
            height: 395,
            navigation: false,
            play: {
                active: true,
                interval: 8000,
                auto: true
            }
        });

        // остановка слайдеров при ресайзе
        function onResize(){
            $('.slides .slidesjs-play, .wide-slider .slidesjs-play').trigger("click");
            $("body").data("sl-stopped", "");
            
            return false;
        }

        var timer;
        $(window).bind('resize', function(){
            
            if ( !$("body").data("sl-stopped") ) {
                $('.slides .slidesjs-stop, .wide-slider .slidesjs-stop').trigger("click").hide();
                $("body").data("sl-stopped", true);
            }

           timer && clearTimeout(timer);
           timer = setTimeout(onResize, 500);
        });

    });
})(jQuery);
