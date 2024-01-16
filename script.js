const sidebar = document.querySelector('.sidebar');
const hidehamburger = document.querySelector('#hamburger');
const hidecross = document.querySelector('#cross-icon');
const navbar = document.querySelector('.navbar');
const Darkmode = document.querySelector('.dark-mode');
const Lightmode = document.querySelector('.light-mode');
const body = document.querySelector('body');
const linkcont = document.querySelector('.link-container');


function showSidebar() {
    sidebar.style.display = 'block';
    hidecross.style.display = 'block';
    hidehamburger.style.display = 'none';
}
function hideSidebar() {
    sidebar.style.display = 'none';
    hidehamburger.style.display = "block";
    hidecross.style.display = 'none';
}

// dark-mode 
function darkmode() {
    Lightmode.style.display = 'block';
    Darkmode.style.display = "none";
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "black";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
    navbar.style.borderBottom = " 1px solid grey";
    sidebar.style.backgroundColor = "black";
    linkcont.style.color = "white";
}
function lightmode() {
    Lightmode.style.display = 'none';
    Darkmode.style.display = "block";
    navbar.style.backgroundImage = "";
    navbar.style.backgroundColor = "";
    body.style.backgroundColor = "";
    navbar.style.borderBottom = "";
    sidebar.style.backgroundColor = "";
    body.style.backgroundImage = "";
    linkcont.style.color = "";


}
//darkmode ends

//top-function
function topFunction() {
    document.documentElement.scrollTop = 0;
}
//top func ends