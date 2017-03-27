$(document).ready(function() {
		$('.index-catalog').slick({
		autoplay: true,
		dots: false,
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					arrows: false
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
			breakpoint: 992,
			settings: {
				centerPadding: '0px'
			}
		},
		{
			breakpoint: 768,
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