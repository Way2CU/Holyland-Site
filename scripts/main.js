/**
 * Main JavaScript
 * Holy Land
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors: Khalid Sawalhi, Mladen Mijatov
 */

var Caracal = Caracal || {};

/**
 * Handle window scrolling event.
 *
 * @param object event
 */
function handle_window_scroll(event) {
	var scroll = $(this).scrollTop();

	if (scroll > 0 && !Caracal.header.hasClass('detached')) {
		Caracal.header.addClass('detached');
	} else if (scroll == 0 && Caracal.header.hasClass('detached')) {
		Caracal.header.removeClass('detached');
	}
}

/**
 * Initialization function.
 */
function on_site_load() {
	Caracal.header = $('header');

	$(window).scroll(handle_window_scroll);
}

$(on_site_load);
