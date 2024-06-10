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

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav ul a[href*= ' + id + ']').classList.add('active');
            });
        };
    });
};  