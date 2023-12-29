$(document).ready(function () {
    $(".que").click(function () {
        $(this).next().slideToggle(300);
        $(".ans").not($(this).next(".ans")).slideUp(300);
    });
});
