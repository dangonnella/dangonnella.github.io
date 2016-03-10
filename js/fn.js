jQuery(document).ready(function()
{
	$('#mycarousel').jcarousel({
		auto: 5,
		scroll: 1,
		start: 2,
		wrap: 'both',
		initCallback: mycarousel_initCallback,
		itemVisibleInCallback: mycarousel_itemVisibleInCallback
	})
	 if ( $.browser.msie && $.browser.version.substr(0,1) == 6 ) {
	DD_belatedPNG.fix('#slider img');
	}	
});

function mycarousel_initCallback(carousel) {
	$("#slider-nav ul li a").bind("click", function() {
		var index = $(this).attr("id").split("_");
		carousel.scroll($.jcarousel.intval($(this).text()));
		$("#slider-nav ul li a").removeClass("active"); 
		$(this).addClass("active");
        return false;	
	});
};
function mycarousel_itemVisibleInCallback(carousel, item, index, state) { 
	$('#slider-nav ul li a').removeClass('active');
	$('#slider-nav ul li a').each(function() {
		var rel = $(this).text();
		if (rel == index) {
			$(this).addClass('active');
		};
	})
 }