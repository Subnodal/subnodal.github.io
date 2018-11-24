function scrollDown() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section").not(".cover")[0].offsetTop - 80
    }, 1000);
}

$(function() {
    if ($(window).scrollTop() >= 20) {
        $(".arrowContainer").hide();
    }

    $("header").hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $(".arrowContainer").fadeOut();
        } else {
            $(".arrowContainer").fadeIn();
        }

        if ($(this).scrollTop() >= ($("section.cover").height() / 1.5) - 50) {
            $("header").fadeIn();
        } else {
            $("header").fadeOut();
        }
    });
});