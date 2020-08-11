$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(1000,
        function() {
            $(this).parent().fadeOut(1000);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function() {

    //this is to open menu in small screens
    $(".sign-up .hidden-menu").click(function() {
        $("body").addClass("overflow");
        $(".white-list").addClass("overflow");
        $(".white-list").addClass("display");
        $(".small-hidden-list").fadeIn(600);
    });
    $(".sign-up .hidden-menu").click(function() {
        $(".white-list").addClass("overflow");
        $(".white-list").fadeIn(600);
    });
    $(".small-hidden-list").click(function() {
        $("body").removeClass("overflow");
        $(".white-list").removeClass("overflow");
        $(".white-list").removeClass("display");
        $(".small-hidden-list").fadeOut(600);
    });
    $(".small-hidden-list").click(function() {
        $(".white-list").removeClass("overflow");
        $(".white-list").fadeOut(600);
    });


    // this is to close the side menu in small screen
    /*
    if ($("body").width() != $(".small-hidden-list .white-list").width()) {
        $("body").click(function() {
            $(".small-hidden-list").fadeOut(600);
        });
    }*/

    // this is to close the side menu in small screen
    /*var $calc = ($("body").width() - $(".small-hidden-list .white-list").width());
    $("body").click(function() {
        if (($calc).click() != $(".small-hidden-list .white-list")) {
            $(".small-hidden-list").fadeOut(600);
        }
    });*/

    // this is to close the side menu in small screen

    /*var $calc = ($("body").width() - $trigger.width());
    var $trigger = $(".small-hidden-list .white-list");
    $($calc).onClick(function() {
        $(".small-hidden-list").fadeOut("600");
    });*/

    //this is to open Search in small screens
    $(".sign-up .search-button").click(function() {
        $("body").toggleClass("overflow")
        $(".sign-up .search-button").toggleClass("overflow");
        $(".small-search").fadeIn(600);
    });

    //this is to close Search in small screens
    $(".small-search .close").click(function() {
        $("body").removeClass("overflow")
        $(".small-search").fadeOut(600);
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

    $(".welcome-small .curr span").click(function() {
        $(".welcome-small .curr span i").toggleClass("rotate");
        $(".welcome-small .curr ul").fadeToggle(600);
    });

    $(".welcome-small .lang span").click(function() {
        $(".welcome-small .lang span i").toggleClass("rotate");
        $(".welcome-small .lang ul").fadeToggle(600);
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
                nav: false,
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
            500: {
                items: 3,
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

    //this is to make the features part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".features div").addClass("owl-carousel owl-theme");
        $(".features .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: true
                }
            }
        })
    } else {
        $(".features div").removeClass("owl-carousel");
        $(".features div .feature").removeClass("owl-carousel");
    };

});