window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");
    showStart();

}

function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function showSetting() {

    document.querySelector("#setting").addEventListener("click", hideStart);


}

function hideStart() {

    document.querySelector("#play").removeEventListener("click", hideStart);
    console.log("hide start");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {

    console.log("show game");

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hide");
}
