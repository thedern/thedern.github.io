// sticky nav
$(document).ready(function() {

    // scroll buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--about').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--homework').offset().top}, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--links').offset().top}, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--con').offset().top}, 1000);
    })


    // Animations on scroll

    $('.js--about').waypoint(function(direction) {
        $('.js--about').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--homework').waypoint(function(direction) {
        $('.js--homework').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--links').waypoint(function(direction) {
        $('.js--links').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--con').waypoint(function(direction) {
        $('.js--con').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });



});
