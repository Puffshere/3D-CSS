const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const logo = document.querySelector(".logo img");
const login = document.querySelector(".login button");
const description = document.querySelector(".info h3");
const roles = document.querySelector(".roles");
const rolesC = document.querySelector(".active");
const rolesA = document.querySelector(".a");
const rolesB = document.querySelector(".b");
const rolesD = document.querySelector(".d");
const actions = document.querySelector(".actions");


function myFunction() {
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(200px) rotateZ(-20deg)";
    description.style.transform = "translateZ(125px)";
    roles.style.transform = "translateZ(100px)";
    rolesC.style.transform = "translateZ(120px)";
    rolesA.style.transform = "translateZ(100px)";
    rolesB.style.transform = "translateZ(100px)";
    rolesD.style.transform = "translateZ(100px)";
    login.style.transform = "translateZ(175px)";
    container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}

function myReLoad() {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    roles.style.transform = "translateZ(0px)";
    login.style.transform = "translateZ(0px)";
    document.location.reload();
}
