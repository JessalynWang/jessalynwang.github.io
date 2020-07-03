


$(document).ready(function () {


    $("#anchor").on('click', function (event) {
        event.preventDefault();
        var element = document.getElementById("indexid");

        element.scrollIntoView({ behavior: "smooth" });
    });
    $("#anchor1").on('click', function(event) {
        event.preventDefault();
        var element = document.getElementById("aboutid");

        element.scrollIntoView({behavior: "smooth"});
    });
    $("#anchor2").on('click', function(event) {
        event.preventDefault();
        var element = document.getElementById("contactid");

        element.scrollIntoView({behavior: "smooth"});
    });
});