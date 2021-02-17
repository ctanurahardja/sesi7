let count = 1;
let clickcount = document.getElementById("clickcount");
let btnAddClickCount = document.getElementById("btnAddClickCount");

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}

let changeBackgroundColor = (colour) => {
    btnAddClickCount.style.backgroundColor= colour;
}