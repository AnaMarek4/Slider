$(document).ready(function() {
    const slides = $('.image');
    const totalSlides = slides.length;
    const slideWidth = slides.first().width();
    const containerWidth = $('.slides-container').width(); 
    let currentIndex = 0;

    function updateSlidePosition() {
        const maxSlideWidth = (totalSlides - 1) * slideWidth;
        let newPosition = -currentIndex * slideWidth;

        if (newPosition < -containerWidth) {
            currentIndex = 0;
            newPosition = 0;
        } else if (newPosition > 0) {
            currentIndex = totalSlides - 1; 
            newPosition = -maxSlideWidth;
        }

        $('.slides-container').animate({ 'margin-left': newPosition }, 500);
    }

    function showSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    $('.previous-button').on('click', function() {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    $('.next-button').on('click', function() {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });
 
    updateSlidePosition();
    
});
