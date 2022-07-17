$(document).ready(function() {
    $('#owl-1').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#owl-2').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('#owl-3').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#owl-4').owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});