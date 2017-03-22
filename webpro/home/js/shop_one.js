
$('.img').click(function() {
	//				alert(11);
	$('.zhe').css("display", "block");
	$('.zhe1').css("display", "block");
})
$('.quxiao').click(function() {
	$('.zhe').css("display", "none");
	$('.zhe1').css("display", "none");
})

//		var swiper = new Swiper('.swiper-container', {
//			pagination: '.swiper-pagination',
//			nextButton: '.swiper-button-next',
//			prevButton: '.swiper-button-prev',
//			paginationClickable: true,
//			spaceBetween: 30,
//			centeredSlides: true,
//			autoplay: 2500,
//			autoplayDisableOnInteraction: false,
//		});

$("footer dl").click(function() {
	var $down = $(this).index();
	$('section>div').hide().eq($down).show();
	$('header>div').hide().eq($down).show();
	//	           $('header>div').hide().eq($down).show();
})