// Write your Javascript code.
//fix z-index for hover effect
$(function () {
    $(".work-item").on("mouseover", function () {
        $(".work-item").css("z-index", "auto");
        $(this).css("z-index", "1000");
    });
});