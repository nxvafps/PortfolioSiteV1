$(document).ready(function() {
    $(".projectContainer").on("click", function() {
        const url = $(this).data("url");
        if (url) {
            window.location.href = url;
        }
    });
});
