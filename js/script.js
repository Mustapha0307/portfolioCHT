humbrger = document.querySelector(".humbrger");
humbrger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    navBar = document.querySelector(".backdrop");
    navBar.classList.toggle("active");
    Xeffect = document.querySelector(".humbrger");
    Xeffect.classList.toggle("active");
    blur = document.querySelector(".blur-effect");
    blur.classList.toggle("active");
}
let mustapha = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
mustapha.onclick = function(){
    menu.classList.toggle("active");
}