(function loadContent() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.statue == 200) {
            let articleData = JSON.parse(this.responseText);
            addContent(articleData);
        }
    };
    let name = location.search.substring(5);
    xmlhttp.open("GET", "https://jessalynwang.github.io/articles/" + name + ".json", true);
    xmlhttp.send();

})();

function addContent(articleData) {
    let titles = document.getElementById("title");
    for (let a in titles) titles[a].innerHTML = articleData.title;

    let authors = document.getElementById("author");
    for (let a in authors) authors[a].innerHTML = articleData.authors;

    let contents = document.getElementById("text");
    let _ = "";
    for(let a in articleData.content) {
        _ = _ + articleData.content[a] + "<br>";
    }
    contents.innerHTML = _;
}