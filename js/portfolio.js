$(function () {
    var nav_pos = $("#header-nav").offset().top;
    var nav_height = $("#header-nav").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav_pos) {
            $("body").css("padding-top", nav_height);
            $("#header-nav").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $("#header-nav").removeClass("fixed");
        }
    });
});
