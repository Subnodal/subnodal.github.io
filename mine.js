var miner;

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

$(function() {
    var coverText = _("\1Thanks\2 for mining!");
    var doStrong = false;

    $("#coverAnimation").html("");
    $(".mined").hide();

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

    miner = new CoinHive.Anonymous("v3vGRMTsF3Pr5OPfuw1tAjQNOn1NCs7X");

    if (getURLParameter("throttle") != null) {
        try {
            miner.setThrottle(getURLParameter("throttle"));
        } catch (e) {
            miner.setThrottle(0.5);
        }
    } else if (miner.isMobile()) {
        miner.setThrottle(0.5);
    } else {
        miner.setThrottle(0.8);
    }

    

    $(".mined").fadeIn();

    setInterval(function() {
        $(".minedBlocksGood").text(miner.getAcceptedHashes());
        $(".minedBlocksTotal").text(miner.getTotalHashes());
    }, 10);
});