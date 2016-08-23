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