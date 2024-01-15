const sidebar = document.querySelector('.sidebar');
const hidehamburger = document.querySelector('#hamburger');
const hidecross = document.querySelector('#cross');
console.log(sidebar);

function showSidebar(){
    sidebar.style.display='block';
    hidecross.style.display='block';
    hidehamburger.style.display='none';
}
function hideSidebar(){
    sidebar.style.display='none';
    hidehamburger.style.display="block";
    hidecross.style.display='none';
}