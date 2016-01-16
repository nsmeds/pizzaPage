var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var hours = document.getElementById("hours");
var hoursdiv = document.getElementById("hoursdiv");
var about = document.getElementById("about");
var aboutdiv = document.getElementById("aboutdiv");
var pizzas = document.getElementById("pizzas");
var classicsbutton = document.getElementById("classics-button");
var classics = document.getElementById("classics");
var signaturesbutton = document.getElementById("signatures-button");
var signatures = document.getElementById("signatures");
var buildyourownbutton = document.getElementById("buildyourown-button");
var buildyourown = document.getElementById("buildyourown");
var backbutton = document.getElementById("backbutton");


function pizzamenu() {
    navbar.innerHTML = pizzas.innerHTML;
}

function hoursmenu() {
    navbar.innerHTML = hoursdiv.innerHTML;
}

function aboutmenu() {
    navbar.innerHTML = aboutdiv.innerHTML;
}

function backhome() {
    pizzas.innerHTML = navbar.innerHTML;
}

function classicsmenu() {
    navbar.innerHTML = classics.innerHTML;
}

function signaturesmenu() {
    navbar.innerHTML = signatures.innerHTML;
}

function buildyourownmenu() {
    navbar.innerHTML = buildyourown.innerHTML;
}


menu.addEventListener("click", pizzamenu);
hours.addEventListener("click", hoursmenu);
about.addEventListener("click", aboutmenu);
classicsbutton.addEventListener("click", classicsmenu);
signaturesbutton.addEventListener("click", signaturesmenu);
buildyourownbutton.addEventListener("click", buildyourownmenu);
hours.addEventListener("click", hoursmenu);
about.addEventListener("click", aboutmenu);
backbutton.addEventListener("click", backhome);