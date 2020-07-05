


$(document).ready(function () {


    $("#anchor").on('click', function (event) {

        event.preventDefault();

        setTimeout(
            function() {
                var element = document.getElementById("indexid");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
    $("#anchor1").on('click', function(event) {
        event.preventDefault();

        setTimeout(
            function () {
                var element = document.getElementById("aboutid");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
    $("#anchor2").on('click', function(event) {
        event.preventDefault();

        setTimeout(
            function () {
                var element = document.getElementById("contactid");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
    $("#more").on('click', function (event) {
        event.preventDefault();

        setTimeout(
            function () {
                var element = document.getElementById("moreid");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
    $("#proj-c").on('click', function (event) {
        event.preventDefault();

        setTimeout(
            function () {
                var element = document.getElementById("proj");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
    $("#proj-c2").on('click', function (event) {
        event.preventDefault();

        setTimeout(
            function () {
                var element = document.getElementById("proj");

                element.scrollIntoView({ behavior: "smooth" });
            }
            , 100);
    });
});

