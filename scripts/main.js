/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

 var Caracal = Caracal || {};


 function handle_window_scroll(event) {
 	var scroll = $(this).scrollTop();

 	if($('header nav a.active').length == 0){
	 	if (scroll > 0 && !Caracal.header.hasClass('wrap.opacity')) {
	 		Caracal.header.addClass('menu_blue');

	 	} else if (scroll == 0 && Caracal.header.hasClass('menu_blue')) {
	 		Caracal.header.removeClass('menu_blue');
	 	}
 	}
 }
 function on_site_load() {
 	Caracal.header = $('.wrap.opacity');
 	$(window).scroll(handle_window_scroll);
 }

 $(on_site_load);