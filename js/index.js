let isopen = false;

function showcb() {
    if (isopen == true) {
        hideall()
    }
    var pre = document.getElementById("cbt")
    pre.classList.remove("hidden")
    isopen = true
}

function showb() {
    if (isopen == true) {
        hideall()
    }
    var pre = document.getElementById("bt")
    pre.classList.remove("hidden")
    isopen = true
}

function showdt() {
    if (isopen == true) {
        hideall()
    }
    var pre = document.getElementById("dtt")
    pre.classList.remove("hidden")
    isopen = true
}

function showl() {
    if (isopen == true) {
        hideall()
    }
    var pre = document.getElementById("lt")
    pre.classList.remove("hidden")
    isopen = true
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
