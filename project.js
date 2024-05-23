let menuBar = document.querySelector('#menuBar');
// Menu bar On Click
menuBar.onclick = function toggleList() {
    let list = document.querySelector('#listNav');
    let menuX = document.querySelector('#menuX');

    list.style.left = "490px";
    this.style.display = "none";
    menuX.style.display = "block";
}
// Menu Toggle
let menuX = document.querySelector('#menuX');

menuX.onclick = function toggleList() {
    let list = document.querySelector('#listNav');
    let menuBar = document.querySelector('#menuBar');

    list.style.left = "0";
    this.style.display = "none";
    menuBar.style.display = "block";
}