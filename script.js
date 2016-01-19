var menuTop = document.getElementById("menu-top");
var hoursButton = document.getElementById("hours-button");
var menuButton = document.getElementById("menu-button");
var aboutButton = document.getElementById("about-button");
var backButton = document.getElementById("back-button");
var pizzas = document.getElementById("pizzas");
var hours = document.getElementById("hours-div");
var about = document.getElementById("about-div");
var classicsButton = document.getElementById("classics-button");
var signaturesButton = document.getElementById("signatures-button");
var buildYourOwnButton = document.getElementById("buildyourown-button");
var classics = document.getElementById("classics");
var signatures = document.getElementById("signatures");
var buildYourOwn = document.getElementById("build-your-own")

menuButton.addEventListener('click', function(event) {
    menuTop.style.display = "none";
    pizzas.style.display = "flex";
    backButton.style.display = "flex";
});

hoursButton.addEventListener('click', function (event) {
    menuTop.style.display = "none";
    hours.style.display = "flex";
    backButton.style.display = "flex";
});

aboutButton.addEventListener('click', function (event) {
    menuTop.style.display = "none";
    about.style.display = "flex";
    backButton.style.display = "flex";
});

backButton.addEventListener('click', function (event) {
    menuTop.style.display = "flex";
    hours.style.display = '';
    about.style.display = '';
    pizzas.style.display = '';
    classics.style.display = '';
    signatures.style.display = '';
    buildYourOwn.style.display = '';
    backButton.style.display = "flex";
});

classicsButton.addEventListener('click', function(event) {
    pizzas.style.display = "none";
    classics.style.display = "flex";
    backButton.style.display = "flex";
});

signaturesButton.addEventListener('click', function(event) {
    pizzas.style.display = "none";
    signatures.style.display = "flex";
    backButton.style.display = "flex";
});

buildYourOwnButton.addEventListener('click', function(event) {
    pizzas.style.display = "none";
    buildYourOwn.style.display = "flex";
    backButton.style.display = "flex";
});