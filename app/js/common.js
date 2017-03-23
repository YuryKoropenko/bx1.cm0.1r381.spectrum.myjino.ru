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
$(function(){
	$('.header .key img').click(function() {
		$('.mobile-search').toggleClass('opened');
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
	$('.catalog-top-content .zag').click(function() {
		$('.catalog-menu').fadeToggle(100);
		var ht = $('.catalog-menu-bottom').height();
		$('.second-wp').height(ht);
		$(document).click(function(event) {
			if ($(event.target).closest('.catalog-menu').length) return;
				$('.catalog-menu').fadeOut();
				event.stopPropagation();
			});
		return false;
	});
	$('.catalog-menu-bottom .first-1').hover(function() {
		$(this).children('.second-wp').stop(true, false).fadeIn();
		$('.catalog-menu-top .first-1').css('background-color', '#1a6ca3');
	}, function() {
		$(this).children('.second-wp').stop(true, false).fadeOut();
		$('.catalog-menu-top .first-1').css('background-color', 'transparent');
	});
	$('.catalog-menu-bottom .first-2').hover(function() {
		$(this).children('.second-wp').stop(true, false).fadeIn();
		$('.catalog-menu-top .first-2').css('background-color', '#1a6ca3');
	}, function() {
		$(this).children('.second-wp').stop(true, false).fadeOut();
		$('.catalog-menu-top .first-2').css('background-color', 'transparent');
	});
	$('.catalog-menu-bottom .first-3').hover(function() {
		$(this).children('.second-wp').stop(true, false).fadeIn();
		$('.catalog-menu-top .first-3').css('background-color', '#1a6ca3');
	}, function() {
		$(this).children('.second-wp').stop(true, false).fadeOut();
		$('.catalog-menu-top .first-3').css('background-color', 'transparent');
	});
	$('.catalog-menu-bottom .first-4').hover(function() {
		$(this).children('.second-wp').stop(true, false).fadeIn();
		$('.catalog-menu-top .first-4').css('background-color', '#1a6ca3');
	}, function() {
		$(this).children('.second-wp').stop(true, false).fadeOut();
		$('.catalog-menu-top .first-4').css('background-color', 'transparent');
	});
	$('.catalog-menu .with-sub').hover(function() {
		$(this).children('a').css('background-color', '#b5d6ef');
		$('.catalog-menu ul li ul').stop(true, false).slideDown();
	}, function() {
		$(this).children('a').css('background-color', '#d6e3ed');
		$('.catalog-menu ul li ul').stop(true, false).slideUp();
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
	$('.tabs .content table tr td .help').click(function() {
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
	$('.index-catalog').slick({
		autoplay: true,
		dots: false,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '30px'
				}
			}
		]
	});
	$('.index-slider').slick({
		dots: false,
		centerMode: true,
		autoplay: false,
		speed: 300,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				centerPadding: '0px'
			}
		},
		{
			breakpoint: 767,
			settings: {
				centerPadding: '0px',
				arrows: false
			}
		}
		]
	});
	$('.mob-index-slider').slick({
		dots: false,
		centerMode: true,
		autoplay: false,
		speed: 300,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				centerPadding: '0px'
			}
		},
		{
			breakpoint: 767,
			settings: {
				centerPadding: '0px',
				arrows: false
			}
		}
		]
	});
	$('.product-top-info .images').slick({
		autoplay: true,
		arrows: false,
		dots: true
	});
	$('.icons-slider .list').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  arrow: true,
	  dots: false,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		}
	  ]
	});
});