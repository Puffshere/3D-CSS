const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const logo = document.querySelector(".logo img");
const login = document.querySelector(".login button");
const description = document.querySelector(".info h3");
const roles = document.querySelector(".roles");
// const rolesA = document.querySelector(".a");
// const rolesB = document.querySelector(".b");
// const rolesC = document.querySelector(".c");
// const rolesD = document.querySelector(".d");
const hand = document.querySelector(".hand img");
const stripe = document.querySelector(".stripe");
const header = document.querySelector(".header");
const saveFromDashboard = document.querySelector(".firstName");
const saveSecondName = document.querySelector("twoNames");
const saveThirdName = document.querySelector("threeNames");
const saveFourthName = document.querySelector("fourNames");
const exit = document.querySelector("exitBtn");

const mouseOverEvent = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}

function exitFunction() {
    window.location.href = "http://localhost:8080";
}

function addRole1() {
    document.getElementById("addRole1").setAttribute("style", "background-color: #e76f51");
}
function addRole2() {
    document.getElementById("addRole2").setAttribute("style", "background-color: #e76f51");
}
function addRole3() {
    document.getElementById("addRole3").setAttribute("style", "background-color: #e76f51");
}

function addOneName() {
    window.location.href = "http://localhost:8080/save";
}

function addTwoNames() {
    window.location.href = "http://localhost:8080/saveTwo";
}

function addThreeNames() {
    window.location.href = "http://localhost:8080/saveThree";
}

function addFourNames() {
    window.location.href = "http://localhost:8080/saveFour";
}

function myFunction() {
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(200px) rotateZ(-20deg)";
    description.style.transform = "translateZ(125px)";
    roles.style.transform = "translateZ(100px)";
    // rolesA.style.transform = "translateZ(120px)";
    // rolesB.style.transform = "translateZ(100px)";
    // rolesC.style.transform = "translateZ(100px)";
    // rolesD.style.transform = "translateZ(100px)";
    login.style.transform = "translateZ(175px)";
    stripe.style.transform = "translateZ(150px)";
    header.style.transform = "translateZ(150px)";
    document.getElementById("hand").setAttribute("style", "opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)");
    container.addEventListener("mouseover", mouseOverEvent);
}

function myReLoad() {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    roles.style.transform = "translateZ(0px)";
    // rolesA.style.transform = "translateZ(20px)";
    // rolesB.style.transform = "translateZ(0px)";
    // rolesC.style.transform = "translateZ(0px)";
    // rolesD.style.transform = "translateZ(0px)";
    login.style.transform = "translateZ(0px)";
    stripe.style.transform = "translateZ(0px)";
    header.style.transform = "translateZ(0px)";
    document.getElementById("hand").setAttribute("style", "opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)");
    container.removeEventListener("mouseover", mouseOverEvent);
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var loginFromModal = document.getElementById("myLogin");

loginFromModal.onclick = function () {
    window.location.href = "http://localhost:8080/dashboard";
}
