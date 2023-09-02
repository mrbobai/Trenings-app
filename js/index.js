let isopen = false;

function showcb() {
    var pre = document.getElementById("cbt")
    pre.classList.remove("hidden")
}

function showb() {
    var pre = document.getElementById("bt")
    pre.classList.remove("hidden")
}

function showdt() {
    var pre = document.getElementById("dtt")
    pre.classList.remove("hidden")
}

function showl() {
    var pre = document.getElementById("lt")
    pre.classList.remove("hidden")
}

function hideall() {
  var cbt = document.getElementById("cbt");
  cbt.classList.add("hidden");
  var bt = document.getElementById("bt");
  bt.classList.add("hidden");
  var dtt = document.getElementById("dtt");
  dtt.classList.add("hidden");
  var lt = document.getElementById("lt");
  lt.classList.add("hidden");
}
hideall();
