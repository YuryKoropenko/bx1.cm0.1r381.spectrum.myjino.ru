$(document).ready(function() {
	/**/
	$('.r-panel-item__element').on('click', function() {
		$('.r-panel-item__element').removeClass('r-panel-item__element-active');
		$(this).addClass('r-panel-item__element-active');
	});
});