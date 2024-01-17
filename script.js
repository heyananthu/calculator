function clickmebn(button, val) {
    button.style.backgroundColor = "grey"
    document.getElementById("num").value += val;
}
function clbn() {
    document.getElementById("num").value = "";
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }
}
function equl(button) {
    var newval = document.getElementById("num").value;
    var result = eval(newval)
    document.getElementById("num").value = result
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }
}
function del() {
    var clr = document.getElementById("num").value;
    document.getElementById("num").value = clr.toString().slice(0, -1);
}
