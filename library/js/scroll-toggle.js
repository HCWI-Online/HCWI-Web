// Scroll Toggle.
$(function() {
	var header = $(".start-class");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 500) {
			header.removeClass('start-class').addClass("end-class");
		} else {
			header.removeClass("end-class").addClass('start-class');
		}
	});
});