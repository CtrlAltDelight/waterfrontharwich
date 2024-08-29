/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    var config = $('html').data('config') || {}, $body = $('body');

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    // Navbar
    var navbar       = $('.tm-navbar'),
        navbarmargin = navbar.css('margin-bottom').replace('px', ''),
        navbarspace;

    // Center Navbar Dropdown
    navbar.find('.uk-dropdown').addClass('uk-dropdown-center');

    if (!$body.hasClass('tm-navbar-space')) {

        // Split navbar if logo
        var logowidth   = $('.tm-logo > *').width(),
            nav         = $('.tm-nav-wrapper'),
            navitems    = nav.children().children(),
            equal       = Math.ceil(navitems.length / 2),
            rtl         = ($.UIkit.langdirection == 'right'),
            movenav     = 0;

            nav.css('visibility', 'hidden');

        nav.css({ 'margin-right':'', 'margin-left':'' });
        navitems.eq(equal - 1).css({ 'margin-right':'', 'margin-left':'' });

        for( var i = 0; i < equal; i++ ) {
            movenav += navitems.eq(i).outerWidth(true);
        }

        movenav = (nav.width() - movenav) - movenav;

        nav.css(rtl ? 'margin-right' : 'margin-left', movenav);
        navitems.eq(equal - 1).css(rtl ? 'margin-left' : 'margin-right', logowidth + 60);

        setTimeout(function(){
            nav.css('visibility', '');
        }, 250);

    }

    // Parallax Background Scrolling
    if (!$.UIkit.support.touch && $body.hasClass('tm-background-parallax')) {

        var ratio     = config.parallax_ratio,
            container = $('.tm-background:first').css({
                'transform': 'translateZ(0)'
            })[0], x;

        (function animloop(){

            x = window.pageYOffset / ratio;
            container.style.top =  x+'px';
            requestAnimationFrame(animloop);
        }());
    }

});