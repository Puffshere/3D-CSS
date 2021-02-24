const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const logo = document.querySelector(".logo img");
const login = document.querySelector(".save button");
const description = document.querySelector(".info h3");
const roles = document.querySelector(".roles");
const hiddenWords = document.querySelector(".hiddenText");
const hand = document.querySelector(".hand img");
const stripe = document.querySelector(".stripe");
const header = document.querySelector(".header");
const saveFromDashboard = document.querySelector(".firstName");
const saveSecondName = document.querySelector("twoNames");
const saveThirdName = document.querySelector("threeNames");
const saveFourthName = document.querySelector("fourNames");
const exit = document.querySelector("exitBtn");
const mentorInfo = document.querySelector("mentorInfoHenry");
const ht = document.querySelector("hT");

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

function adminDash() {
    window.location.href = "http://localhost:8080/adminDashboard";
}

function toSlackAllow() {
    window.location.href = "http://localhost:8080/slackAllow";
}

function toDash() {
    window.location.href = "http://localhost:8080/dashboard";
}

function myMentorInfo() {
    document.getElementById("mInfo").setAttribute("style", "opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)");
}

function myFunction() {
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(200px) rotateZ(-20deg)";
    description.style.transform = "translateZ(125px)";
    roles.style.transform = "translateZ(100px)";
    login.style.transform = "translateZ(175px)";
    stripe.style.transform = "translateZ(150px)";
    header.style.transform = "translateZ(160px)";
    hiddenWords.style.transform = "opacity 1";
    document.getElementById("hand").setAttribute("style", "opacity:0; -moz-opacity:0.5; filter:alpha(opacity=50)");
    container.addEventListener("mouseover", mouseOverEvent);
    var element = document.getElementById("hT"); element.classList.add("fade-in");
}

function myReLoad() {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    roles.style.transform = "translateZ(0px)";
    login.style.transform = "translateZ(0px)";
    stripe.style.transform = "translateZ(0px)";
    header.style.transform = "translateZ(0px)";
    document.getElementById("hand").setAttribute("style", "opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)");
    container.removeEventListener("mouseover", mouseOverEvent);
    var element = document.getElementById("hT"); element.classList.remove("fade-in");
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
    window.location.href = "http://localhost:8080/workspaceSelect";
}





