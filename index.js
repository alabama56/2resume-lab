$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();
    $('.carousel.carousel-slider').on('click', function(){
        $('.carousel.carousel-slider').carousel('next');
    });
});
