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

    // navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

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



});
