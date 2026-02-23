document.addEventListener('DOMContentLoaded', function(){
	var reviewSlider = new Swiper('.review-swiper', {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		 pagination: {
       		 el: ".swiper-pagination",
			 clickable: true,
     	 },
		 breakpoints:{
			480:{
				slidesPerView: 'auto',
		        spaceBetween: 12,
			},
			1024:{
				slidesPerView: 2,
		       spaceBetween: 24,
			}
		 }
	})
})