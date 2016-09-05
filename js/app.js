$(window).on('load', function () {
    // Stick the #nav to the top of the window
    var nav = $('#bottomMenu');
    var bottom = $('.parallaxBottom');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);

    $(window).resize(function () {
        navHomeY = nav.offset().top;
    });

    $w.scroll(function () {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: '100%'
            });
            bottom.css({
                "margin-top": '61px'
            });
            isFixed = true;
        } else if (!shouldBeFixed && isFixed) {
            nav.css({
                position: 'relative',
                top: '-61px'
            });
            bottom.css({
                "margin-top": '0'
            });
            isFixed = false;
        }
    });

    // Click on the arrow and scroll to the bottom of the page

    $("#arrow").click(function () {
        $('html,body').animate({
                scrollTop: $(".secondMenu").offset().top
            },
            'slow');
    });

    // Draw a box over top of the photo
    // Uses the values of photoTwo height and width to calculate the height and width
    // of the box boxForLines
    // Then, take that value, set it's position with the CSS value
    // Had to do some offset values by percentage to get it just right

    var drawBoxLines = function () {
        var topHeight = $(".photoTwo").height();
        var leftWidth = $(".photoTwo").width();
        /* console.log('Top:' + topHeight + ', left: ' + leftWidth ); */
        $(".boxForLines").css({
            "transform": "rotate(0deg)",
            "-ms-transform": "rotate(0deg)",
            "-webkit-transform": "rotate(0deg)"
        });
        $(".boxForLines").css({
            top: (topHeight * (10 / 100)),
            left: (leftWidth * (3 / 100))
        });
        $(".boxForLines").height($(".photoTwo").height() * (80 / 100));
        $(".boxForLines").width($(".photoTwo").width() * (95 / 100));

        $(".boxForLines").css({
            "transform": "rotate(-15deg)",
            "-ms-transform": "rotate(-15deg)",
            "-webkit-transform": "rotate(-15deg)"
        });

    }

    $(window).resize(drawBoxLines);

    drawBoxLines();

});