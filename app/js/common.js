$(document).ready(function() {
	$('.menu-main .zag').on('click', function() {
		$('.catalog-menu').toggleClass('catalog-menu-show');
		$(document).click(function(event) {
			if ($(event.target).closest('.catalog-menu').length) return;
				$('.catalog-menu').removeClass('catalog-menu-show');
				event.stopPropagation();
			});
		return false;
	});

	$('.catalog-item').hover(function() {
		$(this).children('.name').children('a').css('text-decoration', 'underline');
	}, function() {
		$(this).children('.name').children('a').css('text-decoration', 'none');
	});

	$('.block-flex .column').hover(function() {
		$(this).children('.column-top').children('a').css('background-color', '#1a6ca3');
	}, function() {
		$(this).children('.column-top').children('a').css('background-color', '#3778aa');
	});

	$('.column-menu .with-sub').hover(function() {
		$(this).css('background-color', '#b5d6ef');
		$(this).children('ul').stop(true, false).slideDown(100);
	}, function() {
		$(this).css('background-color', 'transparent');
		$(this).children('ul').stop(true, false).slideUp(100);
	});

	$('.header .key a').on('click', function() {
		$('.popup-bg').fadeIn();
		$('.popup-search').fadeIn();
		return false;
	});
	$('.popup-bg').on('click', function() {
		$('.popup-bg').fadeOut();
		$('.popup-search').fadeOut();
	});
	$('.catalog-zag .tag').click(function() {
		$('.catalog-zag .tag').removeClass('active');
		$(this).addClass('active');
	});

	$('.category-sort .params span').click(function() {
		$(this).toggleClass('active');
	});
	
	$('.header .menu-button').click(function() {
		$('.mobile-bg').fadeIn();
		$('.mobile-menu').addClass('opened');
	});
	$('.mobile-bg').click(function() {
		$(this).fadeOut();
		$('.mobile-menu').removeClass('opened');
	});
	$('.mobile-info .zag').click(function() {
		$(this).toggleClass('opened');
		$(this).next('.mobile-info .info').slideToggle();
	});
	$('.mobile-info-title').click(function() {
		$(this).toggleClass('opened');
		$(this).next('.mobile-info').slideToggle();
	});
	$('td .help').click(function() {
		$('.help-text').removeClass('opened');
		$(this).parent().children('.help-text').toggleClass('opened');
		$(document).click(function(event) {
			if ($(event.target).closest('.help-text').length) return;
				$('.help-text').removeClass('opened');
				event.stopPropagation();
			});
		return false;
	});
	$('.tabs .content table tr td .help-text .close').click(function() {
		$('.help-text').removeClass('opened');
	});

	$(function () {
		var tabContainers = $('div.tabs > div');
		tabContainers.hide().filter(':first').show();
		$('div.tabs ul.tabNavigation a').click(function () {
			tabContainers.hide();
			tabContainers.filter(this.hash).show();
			$('div.tabs ul.tabNavigation a').removeClass('selected');
			$(this).addClass('selected');
				return false;
		}).filter(':first').click();
	});
});
