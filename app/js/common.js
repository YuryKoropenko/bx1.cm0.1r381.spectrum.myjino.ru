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
	$('.catalog-zag .tag').click(function() {
		$('.catalog-zag .tag').removeClass('active');
		$(this).addClass('active');
	});
	$('.category-sort .params span').click(function() {
		$(this).toggleClass('active');
	});
	$('.catalog-top-content .zag').click(function() {
		$('.catalog-menu').fadeToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.catalog-menu').length) return;
				$('.catalog-menu').fadeOut();
				event.stopPropagation();
			});
		return false;
	});
	$('.catalog-menu ul li ul li.with-sub').hover(function() {
		$('.catalog-menu ul li ul li ul').stop(true, false).slideToggle();
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
	$('.mobile-slider').slick({
		autoplay: true,
		dots: false
	});
	$('.index-slider').slick({
		autoplay: true,
		dots: false,
		centerMode: true,
		centerPadding: '240px',
		autoplay: true,
		speed: 300,
		responsive: [
		{
		  breakpoint: 991,
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