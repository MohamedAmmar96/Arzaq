$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
        });
})

$(document).ready(function() {
    //this is to open menu in small screens
    $(".sign-up .hidden-menu").click(function() {
        $("body").toggleClass("overflow")
        $(".small-hidden-list .white-list").toggleClass("overflow");
        $(".small-hidden-list").fadeToggle(600);
    });

    //--------------------------------------------------------------------------
    //-----------------------------------------------------------------------------
    //this is to open Search in small screens
    $(".sign-up .search-button").click(function() {
        $("body").toggleClass("overflow")
        $(".sign-up .search-button").toggleClass("overflow");
        $(".small-search").fadeToggle(600);
    });

    //this is to open big list in menu in small screens
    $(".nested-list span").click(function() {
        $("div.white-list").toggleClass("display-overflow");
        $(".nested-list .nested-list-icon").toggleClass("rotate");
        $(".nav-small-list-one").fadeToggle(600);
    });
    //this is to open sub list in menu in small screens
    $(".nested-list-two").click(function() {
        $(".nested-list .nested-list-two-icon").toggleClass("rotate");
        $(".nav-small-list-two").fadeToggle(600);
    });

    $(".colno2 h4").click(function() {
        $(" .colno2 .footer-data-list").slideToggle(600);
    });
    $(".colno3 h4").click(function() {
        $(" .colno3 .footer-data-list").slideToggle(600);
    });
    $(".colno4 h4").click(function() {
        $(" .colno4 .footer-data-list").slideToggle(600);
    });
    $(".colno5 h4").click(function() {
        $(" .colno5 .footer-data-list").slideToggle(600);
    });

    /*$(".parent").hover(function() {
        $(".back-back").toggleClass("display");
        $(".toggle-btn ul.big-list").toggleClass("display");
        $(".back-back").toggleClass("display");
        $(".big-list").fadeToggle(1000);
    });*/

    /*$(".menu").hover(function() {
        $(".menu-content").toggleClass("display");
        $(".menu-content").fadeToggle(600);
    });*/


    $('#main-slider').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                loop: true
            },
            1400: {
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
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                loop: true
            },
            768: {
                items: 3,
                nav: true,
                loop: true
            },
            992: {
                items: 4,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1400: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })

    $('#clients').owlCarousel({
        loop: true,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1400: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            }
        }
    })
});