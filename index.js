$(function() {
    var coverText = _("We're {\1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamazon\2}");
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
