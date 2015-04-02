var myPage = {
	
	init: function() {
		this.lazyInit();
		this.parallax();
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