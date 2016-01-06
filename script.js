var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
var hours = document.getElementById("hours");
var hoursdiv = document.getElementById("hoursdiv");
var about = document.getElementById("about");
var aboutdiv = document.getElementById("aboutdiv");
var pizzas = document.getElementById("pizzas");
var backbutton = document.getElementById("backbutton");

menu.addEventListener("click", pizzamenu);
hours.addEventListener("click", hours);
about.addEventListener("click", about);
backbutton.addEventListener("click", backhome);

function pizzamenu () {
    navbar.innerHTML = pizzas.innerHTML;
};

function hours () {
    navbar.innerHTML = hoursdiv.innerHTML;
};

function about () {
    navbar.innerHTML = aboutdiv.innerHTML;
};

function backhome () {
    about.innerHTML = navbar.innerHTML;
};