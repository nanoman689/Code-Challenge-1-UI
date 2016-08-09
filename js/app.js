$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#bottomMenu');
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
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'relative',
                top: '-60px'
            });
            isFixed = false;
        }
    });
    
    $("#arrow-frame").click(function() {
    
    $('html,body').animate({
        scrollTop: $(".secondMenu").offset().top},
        'slow');
    });

});