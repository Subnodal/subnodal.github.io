function scrollDown() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section").not(".cover")[0].offsetTop
    }, 1000);
}

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 20) {
            $(".arrowContainer").fadeOut();
        } else {
            $(".arrowContainer").fadeIn();
        }
    });
  });