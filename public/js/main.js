var myPage = {
	
	init: function() {
		this.lazyInit();
		this.parallax();
	},

	lazyInit: function() {

		var bLazy = new Blazy({ 
			breakpoints: [{
				width: 740,
				src: 'data-src-small'
			}], 
			success: function(element){
			}
		});

	},

	parallax: function() {
		var el = document.getElementById("intro");

		window.onscroll = function() {
			var yOffset = window.pageYOffset;
			el.style.backgroundPosition = "50% " + (yOffset / 2) + "px";
		}

	}

}

myPage.init();