$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
        });
})

$(document).ready(function() {

    $(".sign-up ul").click(function() {
        $("body").toggleClass("overflow")
        $(".small-hidden-list .white-list").toggleClass("overflow");
        $(".small-hidden-list").fadeToggle(600);
    });

    $(".nested-list button").click(function() {
        $("div.white-list").toggleClass("display-overflow");
        $(".nested-list .nested-list-icon").toggleClass("rotate");
        $(".nav-small-list-one").fadeToggle(600);
    });
    $(".nested-list-two").click(function() {
        $(".nested-list .nested-list-two-icon").toggleClass("rotate");
        $(".nav-small-list-two").fadeToggle(600);
    });

    $(".parent").hover(function() {
        $("body").toggleClass("overflow");
        $(".back-back").toggleClass("display");
        $(".toggle-btn ul.big-list").toggleClass("display");
        $(".back-back").toggleClass("display");
        $(".big-list").fadeToggle(1000);
    });

    $(".menu").hover(function() {
        $(".menu-content").toggleClass("display");
        $(".menu-content").fadeToggle(600);
    });


    $('#main-slider').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            },
            1350: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                loop: true
            },
            767: {
                items: 3,
                nav: false,
                loop: true
            },
            991: {
                items: 4,
                nav: false,
                loop: true
            },
            1199: {
                items: 5,
                nav: true,
                loop: true
            },
            1400: {
                items: 6,
                nav: true,
                loop: true
            }
        }
    })

    $('#clients').owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
});