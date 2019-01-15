$(function() {
    var coverText = _("404\nFile not found!");
    var doStrong = false;

    $("#coverAnimation").html("");

    for (var i = 0; i < coverText.length; i++) {
        setTimeout(function() {
            if (coverText[0] == "\n") {
                $("#coverAnimation").html($("#coverAnimation").html() + "<br>");

                doStrong = true;
            } else {
                $("#coverAnimation").html($("#coverAnimation").html() + (doStrong ? "<small class='mono'>" : "") + coverText[0] + (doStrong ? "</small>" : ""));
            }

            coverText = coverText.substring(1);
        }, 100 * (i + 1));
    }
});