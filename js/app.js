// init swiper
document.querySelectorAll('.slider').forEach((element, index) => {
	window[`slider${index + 1}`] = new Swiper(element, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125
	})
})


// sync sliders
bindSwipers(slider1, slider2, slider3, slider4)