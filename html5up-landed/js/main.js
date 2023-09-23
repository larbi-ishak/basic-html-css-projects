// document.getElementById("arrow").onclick = function () {
//     window.scrollBy(0, 500);
// };
function indexOf(itemList, item) {
    var i = -1;
    for (var x = 0; x < itemList.length; x++) {
        if (item === itemList[x]) {
            i = x;
            break;
        }
    }
    return i;
}
m = ["mouad", "ishak", "younes", "ziyad", "younes"];
console.log(indexOf(m, "younes"));

function push(itemList, item) {
    itemList[itemList.length] = item;
}

push(m, "mohamed");
console.log(m);

function pop(itemList) {
    itemList.length = itemList.length - 1;
}
pop(m);
console.log(m);

function revers(itemList) {
    for (var x = 0; x < itemList.length / 2; x++) {
        var temp = itemList[x];
        itemList[x] = itemList[itemList.length - 1 - x];
        itemList[itemList.length - 1 - x] = temp;
    }
}
function shift(itemList) {
    revers(itemList);
    itemList.length = itemList.length - 1;
    revers(itemList);
}
shift(m);
console.log(m);
revers(m);
console.log(m);

function unshift(itemList, item) {
    revers(itemList);
    itemList[itemList.length] = item;
    revers(itemList);
}
unshift(m, "hocin");
console.log(m);

var skills = ["html", "css", "js", "googling"];
function join(List, strip) {
    var s = " ";
    for (var x = 0; x < List.length; x++) {
        if (x == List.length - 1) {
            s = s + "" + List[x];
        } else {
            s = s + "" + List[x] + "" + strip;
        }
    }
    console.log(s);
}
join(skills, "-");

function split(mot, fasla) {
    var mot1 = mot;
    var splitted = [];
    for (var x = 0; x < mot1.length; x++) {
        if (mot1[x] == fasla) {
            push(splitted, mot1.substr(0, x));
            mot1 = mot1.slice(x + 1, mot1.length);
            x = 0;
        }
        if (x == mot1.length - 1 && mot1[x] != fasla) {
            push(splitted, mot1.substr(0, x + 1));
        }
    }
    console.log(splitted);
}

var ger = "fgablalcoame";
split(ger, "a");
