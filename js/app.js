$(window).on('load', function(){
    // Stick the #nav to the top of the window
    var nav = $('#bottomMenu');
    var bottom = $('.parallaxBottom');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
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

   
    $(window).resize(function(){
        var top = $(".photoTwo").offset().top;
        var left = $(".photoTwo").offset().left;
        console.log('Top:' + top + ', left: ' + left );
        $(".boxForLines").css({
            "transform":"rotate(0deg)",
            "-ms-transform":"rotate(0deg)",
            "-webkit-transform":"rotate(0deg)"
        });
        $(".boxForLines").offset({top:(top+55),left:(left+15)});
        $(".boxForLines").height($(".photoTwo").height()-80);
        $(".boxForLines").width($(".photoTwo").width()-33);

            var boxWidth = $(".boxForLines").width();
            var boxHeight = $(".boxForLines").height();
        console.log(boxWidth);
            $(".boxForLines").css({
                    "transform":"rotate(-17deg)",
                    "-ms-transform":"rotate(-17deg)",
                    "-webkit-transform":"rotate(-17deg)"
            });

    });

    var top = $(".photoTwo").offset().top;
    var left = $(".photoTwo").offset().left;
    console.log('Top:' + top + ', left: ' + left );
    $(".boxForLines").offset({top:(top+55),left:(left+15)});
    $(".boxForLines").height($(".photoTwo").height()-80);
    $(".boxForLines").width($(".photoTwo").width()-33);
    
        var boxWidth = $(".boxForLines").width();
        var boxHeight = $(".boxForLines").height();

        console.log('Top of box: ' + $('.boxForLines').offset().top);
        $(".boxForLines").css({
                "transform":"rotate(-17deg)",
                "-ms-transform":"rotate(-17deg)",
                "-webkit-transform":"rotate(-17deg)"
        });
        console.log('Top of box after rotate: ' + $('.boxForLines').offset().top);
    
});