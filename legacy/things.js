


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
    $("#anchor3").on('click', function (event) {

        event.preventDefault();

        setTimeout(
            function () {
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

function loadContent() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articleData = JSON.parse(this.responseText);
            addContent(articleData);
        }
    };
    let name = location.search.substring(6);
    xmlhttp.open("GET", "https://jessalynwang.github.io/articles/" + name + ".json", true);
    xmlhttp.send();

}

function addContent(articleData) {
    let titles = document.getElementsByClassName("title");
    for (let a in titles) titles[a].innerHTML = articleData.title;
    let authors = document.getElementsByClassName("author");
    for (let a in authors) authors[a].innerHTML = articleData.authors;

    let contents = document.getElementById("text");
    let _ = "";
    for (let a in articleData.content) {
        _ = _ + articleData.content[a] + "<br>";
    }
    contents.innerHTML = _;
}

function toggledrop(x) {
    switch (x) {
        case 'c':
            var element = document.getElementById("cdrop");
            element.classList.toggle("hide");
            break;
        case 'p':
            var element = document.getElementById("pdrop");
            element.classList.toggle("hide");
            break;
        case 'w':
            var element = document.getElementById("wdrop");
            element.classList.toggle("hide");
            break;
        case 'm':
            var element = document.getElementById("mdrop");
            element.classList.toggle("hide");
            break;
    }
}