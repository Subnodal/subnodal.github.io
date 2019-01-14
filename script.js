function scrollDown() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("section").not(".cover")[0].offsetTop - 80
    }, 1000);
}

$(function() {
    $("*[import]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;

            $.ajax({
                url: $(this).attr("import"),
                error: function() {
                    $(thisPassOn).html(_("Could not load associated information."));
                }
            }).done(function(data) {
                $(thisPassOn).html(data);
            });
        } else {
            $(this).html("<em>Content will go here at run-time: " + $(this).attr("import") + "</em>");
        }
    });

    $("*[markdown]").each(function() {
        if (!window.location.href.startsWith("file:///")) {
            var thisPassOn = this;

            $.ajax({
                url: $(this).attr("markdown"),
                error: function() {
                    $(thisPassOn).html(_("Could not load associated information."));
                }
            }).done(function(data) {
                $(thisPassOn).html(new showdown.Converter().makeHtml(data));
            });
        } else {
            $(this).html("<em>Content will go here at run-time: " + $(this).attr("markdown") + "</em>");
        }
    });

    setInterval(function() {
        $("*[markdownrf]").each(function() {
            if (!window.location.href.startsWith("file:///")) {
                var thisPassOn = this;

                $.ajax({
                    url: $(this).attr("markdownrf"),
                    error: function() {
                        $(thisPassOn).html(_("Could not load associated information."));
                    }
                }).done(function(data) {
                    if ($(thisPassOn).html() != new showdown.Converter().makeHtml(data)) {
                        $(thisPassOn).html(new showdown.Converter().makeHtml(data));
                    }
                });
            } else {
                $(this).html("<em>Content will go here at run-time: " + $(this).attr("markdownrf") + "</em>");
            }
        });
    }, 1000);

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