const dropMenu = document.querySelector(".drop-menu");
const menuIcon = document.querySelector(".menu-icon")


function showMenu(){
    dropMenu.classList.toggle("show-drop--menu")
    menuIcon.classList.toggle("close-icon")
}