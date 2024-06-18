const basSlider = () => {
    document.addEventListener("DOMContentLoaded", function() {
        let basSliderElement = document.querySelector('.bas-slider');
        if (basSliderElement) {
            const basSlider = new Swiper('.bas-slider', { 
                // Optional parameters
                effect: "fade",
                speed: 800,
                autoHeight: true,
                fadeEffect: {
                    crossFade: true
                },
                watchOverflow: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
				
                // Accessibility options
                a11y: {
                    enabled: true,
					slideLabelMessage:"Slide {{index}} of {{slidesLength}}",
                    slideRole: null, // Custom role for slide
                },
            });
        }
    });
}
export default basSlider;
