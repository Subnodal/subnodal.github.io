$(function() {
    var coverText = _("We're {\1amazing developers who make cool products and do cool things. One of our projects includes GameProxy, which is a cool online gaming site. In our chats, we like saying the phrase lol for no reason whatsoever. However, hopefully you like our site and our products! Feel free to tweet us on Twitter as well if you like our products. Some of our products other than GameProxy include Movenet, IAmAt and subOS which are all revolutionary online technology products. subOS is an operating system with movable and closable tabs made in just HTML, CSS and Javascript. Truly revolutional! Anyway, check it out if you want. Movenet is amazing for checking live and scheduled departure times for loads of types of public transport. IAmAt is a revolutional site which lets you edit and make your own blogs and pages on our custom domain, only editable by you once you create it! Anyway, hopefully you enjoy our projects and check out this site. Happy week of Black Friday. Next monday is Cyber Mondau, so enjoy that too.\2}");
    var doStrong = false;

    $("#coverAnimation").html("");

    for (var i = 0; i < coverText.length; i++) {
        setTimeout(function() {
            if (coverText[0] == "\1") {
                doStrong = true;
            } else if (coverText[0] == "\2") {
                doStrong = false;
            } else {
                $("#coverAnimation").html($("#coverAnimation").html() + (doStrong ? "<strong>" : "") + coverText[0] + (doStrong ? "</strong>" : ""));
            }
            
            coverText = coverText.substring(1);
        }, 100 * (i + 1));
    }
});
