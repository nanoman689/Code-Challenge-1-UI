$(window).on('load', function(){
    // Stick the #nav to the top of the window
    var nav = $('#bottomMenu');
    var bottom = $('.parallaxBottom');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    
    $(window).resize(function(){
        navHomeY = nav.offset().top;
    });
    
    $w.scroll(function() {
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
                "margin-top":'61px'
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'relative',
                top: '-61px'
            });
            bottom.css({
                "margin-top":'0'
            });
            isFixed = false;
        }
    });
    
    $("#arrow").click(function() {
        $('html,body').animate({
            scrollTop: $(".secondMenu").offset().top},
            'slow');
    });

    var drawBoxLines = function(){
        var topHeight = $(".photoTwo").height();
        var leftWidth = $(".photoTwo").width();
        /* console.log('Top:' + topHeight + ', left: ' + leftWidth ); */
        $(".boxForLines").css({
            "transform":"rotate(0deg)",
            "-ms-transform":"rotate(0deg)",
            "-webkit-transform":"rotate(0deg)"
        });
        $(".boxForLines").css({top:(topHeight*(10/100)),left:(leftWidth*(3/100))});
        $(".boxForLines").height($(".photoTwo").height()*(80/100));
        $(".boxForLines").width($(".photoTwo").width()*(95/100));
        
            $(".boxForLines").css({
                    "transform":"rotate(-15deg)",
                    "-ms-transform":"rotate(-15deg)",
                    "-webkit-transform":"rotate(-15deg)"
            });

    }
    
    $(window).resize(drawBoxLines);
    
    drawBoxLines();
    
});