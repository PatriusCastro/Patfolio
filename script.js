var lastScrollTop = 0;
    navbar = document.getElementById("nav");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-90px";
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}