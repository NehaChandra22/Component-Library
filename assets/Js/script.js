const sidebar = document.querySelector('.left-sidebar');
const hidehamburgerL = document.querySelector('#hamburger-L');
const hidehamburgerR = document.querySelector('#hamburger-R');
const hidecrossL = document.querySelector('#cross-icon-L');
const hidecrossR = document.querySelector('#cross-icon-R');
const navbar = document.querySelector('.navbar');
const Darkmode = document.querySelector('.dark-mode');
const Lightmode = document.querySelector('.light-mode');
const body = document.querySelector('body');
const linkcont = document.querySelector('.link-container');
const aside = document.querySelector('aside')

function showSidebar() {
    sidebar.style.display = 'block';
    hidecrossL.style.display = 'block';
    hidehamburgerL.style.display = 'none';
    
}
function hideSidebar() {
    sidebar.style.display = 'none';
    hidehamburgerL.style.display = "block";
    hidecrossL.style.display = 'none';
}
 
function showAside() {
    aside.style.display = 'block';
    hidecrossR.style.display = 'block';
    hidehamburgerR.style.display = 'none';
    
}
function hideAside() {
    aside.style.display = 'none';
    hidehamburgerR.style.display = "block";
    hidecrossR.style.display = 'none';
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