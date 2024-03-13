const MESSAGE = "subnodal";
const TEXT_ENTRY_DURATION = 250;

function easeOutSine(t) {
    return Math.sin((t * Math.PI) / 2);
}

window.addEventListener("load", function() {
    var wordmark = document.querySelector(".wordmark");

    wordmark.textContent = "";

    setTimeout(function() {
        var startTime = Date.now();

        requestAnimationFrame(function render() {
            var currentIndex = Math.floor(easeOutSine(Math.min((Date.now() - startTime) / TEXT_ENTRY_DURATION, 1)) * 8);

            wordmark.textContent = MESSAGE.substring(0, currentIndex);

            requestAnimationFrame(render);
        });
    }, 500);
});