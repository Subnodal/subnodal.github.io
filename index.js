$(function() {
    var coverText = "We're {subnodal}";
    var doStrong = false;

    $("#coverAnimation").html("");

    for (var i = 0; i < coverText.length; i++) {
        setTimeout(function() {
            if (coverText[0] == "s") {
                doStrong = true;
            }
            
            if (coverText[0] == "}") {
                doStrong = false;
            }

            $("#coverAnimation").html($("#coverAnimation").html() + (doStrong ? "<strong>" : "") + coverText[0] + (doStrong ? "</strong>" : ""));
            coverText = coverText.substring(1);
        }, 100 * (i + 1));
    }
});