$(document).ready(function() {
    var n
    $("#up").click(function() {
        $(".square").animate({'top': '-=20'},"fast",);
    });
    
    $("#down").click(function() {
        $(".square").animate({'bottom': '-=20'},"fast",);
    });
    
    $("#left").click(function() {
        $(".square").animate({'left': '-=20'},"fast",);
    });
    
    $("#right").click(function() {
        $(".square").animate({'right': '-=20'},"fast",);
    });
    $("#rotate").click(function() {
        n += 90
        $(".square").css({'transform': 'rotate('+n+'deg)'});
    });
  });