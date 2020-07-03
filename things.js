


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
    $("#more").on('click', function (event) {
        event.preventDefault();
        var element = document.getElementById("moreid");

        element.scrollIntoView({ behavior: "smooth" });
    });
    $("#proj-c").on('click', function (event) {
        event.preventDefault();
        var element = document.getElementById("proj");

        element.scrollIntoView({ behavior: "smooth" });
    });
    $("#proj-c2").on('click', function (event) {
        event.preventDefault();
        var element = document.getElementById("proj");

        element.scrollIntoView({ behavior: "smooth" });
    });
});