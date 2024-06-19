const smallSizeSlider = () => {
	document.addEventListener("DOMContentLoaded", function() {
		let smallSizeSliderItem = document.querySelector('.small-size-slider'); 
		if (smallSizeSliderItem) {
			const smallSizeSlider = new Swiper('.small-size-slider', {
				// Optional parameters
				direction: 'horizontal',
				loop: false,
				allowThresholdMove: true,
				slidesPerView: 'auto',
				spaceBetween: 0,
				spaceBetween: 7,
				a11y: {
                    enabled: true,
					slideLabelMessage:"Slide {{index}} of {{slidesLength}}",
                    slideRole: null, // Custom role for slide
                },			
				
			});
		}
	});
}
export default smallSizeSlider
