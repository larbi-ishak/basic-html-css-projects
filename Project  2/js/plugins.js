/*global console, $, alert, prompt*/
function tab1() {
    "use strict";
    document.getElementById("tab1").style.backgroundColor = "#ff791e";
    document.getElementById("tab2").style.backgroundColor = "#000";
    document.getElementById("tab3").style.backgroundColor = "#000";
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    
}
function tab2() {
    "use strict";
    document.getElementById("tab1").style.backgroundColor = "#000";
    document.getElementById("tab2").style.backgroundColor = "#ff791e";
    document.getElementById("tab3").style.backgroundColor = "#000";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content3").style.display = "none";

}
function tab3() {
    "use strict";
    document.getElementById("tab1").style.backgroundColor = "#000";
    document.getElementById("tab2").style.backgroundColor = "#000";
    document.getElementById("tab3").style.backgroundColor = "#ff791e";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content1").style.display = "none";
    document.getElementById("content3").style.display = "block";
    
}