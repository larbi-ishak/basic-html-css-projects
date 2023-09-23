function tab1() {
    "use strict";
    document.getElementById("h1").style.display = "block";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("ul1").style.backgroundColor = "#fff";
    document.getElementById("ul2").style.backgroundColor = "transparent";
    document.getElementById("ul3").style.backgroundColor = "transparent";
}
function tab2() {
    "use strict";
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "block";
    document.getElementById("h3").style.display = "none";
    document.getElementById("ul1").style.backgroundColor = "transparent";
    document.getElementById("ul2").style.backgroundColor = "#fff";
    document.getElementById("ul3").style.backgroundColor = "transparent";
}
function tab3() {
    "use strict";
    document.getElementById("h1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("h3").style.display = "block";
    document.getElementById("ul1").style.backgroundColor = "transparent";
    document.getElementById("ul2").style.backgroundColor = "transparent";
    document.getElementById("ul3").style.backgroundColor = "#fff";
}