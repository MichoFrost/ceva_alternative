let burgericon = document.querySelector(".burgericon");
let navi = document.querySelector(".navi");
function toggleNavi() {
    navi.classList.toggle("visible");
}

burgericon.addEventListener("click", toggleNavi);
