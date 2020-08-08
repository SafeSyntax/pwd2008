$('.our-slider').owlCarousel({
    items: 3,
    margin: 15,
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>', ],
    responsive:{
        0:{
           items: 1, 
           dots: false
        },
        600:{
           items: 2
        },
        1000:{
            
        }
    }
});


$('.another').owlCarousel({
    items: 5,
});