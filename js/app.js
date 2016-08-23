$(function() {
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

    $(window).load(function(){
        $(window).resize(function(){
            $(".boxForLines").offset({top:$(".photoTwo").offset().top,left:$(".photoTwo").offset().left});
            $(".boxForLines").height($(".photoTwo").height());
            $(".boxForLines").width($(".photoTwo").width());

            var boxWidth = $(".boxForLines").width();
            var boxHeight = $(".boxForLines").height();
            $(".boxForLines").css({
                    "transform-origin":boxWidth/2+"px "+ boxHeight/2+"px",
                    "transform":"rotate(-27deg)"
            });

        });
    });
                     
    $(".boxForLines").offset({top:$(".photoTwo").offset().top,left:$(".photoTwo").offset().left});
    $(".boxForLines").height($(".photoTwo").height());
    $(".boxForLines").width($(".photoTwo").width());
    
    var boxWidth = $(".boxForLines").width();
        var boxHeight = $(".boxForLines").height();
        $(".boxForLines").css({
                "transform-origin":boxWidth/2+"px "+ boxHeight/2+"px",
                "transform":"rotate(-27deg)"
        });
    
});