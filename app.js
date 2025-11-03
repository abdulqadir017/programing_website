const container = document.getElementById("container");
const side = document.getElementById("side");
const side_r = document.getElementById("side_r");
const home1 = document.getElementById("home1");
home1.style.display = "none"

function div() {

    side.style.display = "none";
    side_r.style.display = "none";
    //container.style.display = "none"
    home1.style.display = "flex";
}

function hidehome() {
    //container.style.display = "block"
    side.style.display = "block";
    side_r.style.display = "flex";
    home1.style.display = "none";
}
