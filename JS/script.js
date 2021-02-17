var count = 1;
var clickcount = document.getElementById("clickcount");
var btnAddClickCount = document.getElementById("btnAddClickCount");

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}

function changeBackgroundColor(colour){
    btnAddClickCount.style.backgroundColor= colour;
}