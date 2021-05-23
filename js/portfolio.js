$(function () {
    var nav_pos = $("#header-nav").offset().top;
    var nav_height = $("#header-nav").outerHeight();
    var nav_pos1 = $("#hamburger").offset().top;
    var nav_height1 = $("#hamburger").outerHeight();
    var windowWidth=$(window).width();
    var windowSm=1024;
    if (windowWidth > windowSm) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav_pos) {
            $("body").css("padding-top", nav_height);
            $("#header-nav").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $("#header-nav").removeClass("fixed");
        }
    });
  } else {
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav_pos1) {
            $("body").css("padding-top", nav_height1);
            $("#hamburger").addClass("fixed");
            $(".sm").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $("#hamburger").removeClass("fixed");
            $(".sm").removeClass("fixed");
        }
});
}
});
