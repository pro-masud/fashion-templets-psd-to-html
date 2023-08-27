// get all elements here now
const closeBtn = document.querySelector(".menu-toggler");
const sideClose = document.getElementById("sideclose");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-top-area");


closeBtn.addEventListener("click", () => {
    // navbar.classList.toggle("show-menu");
    navbar.style.left = "-12px";
});


document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !closeBtn.contains(event.target)) {
        navbar.style.left = "-425px";
    }
});

sideClose.addEventListener("click", () => {
    navbar.style.left = "-425px";
});


window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const navbarHeight = header.getBoundingClientRect().height;

   if( scrollHeight > navbarHeight){
        header.classList.add("header-fix");
   }else{
        header.classList.remove("header-fix");
   }


//    console.log(scrollHeight);

//    if( scrollHeight > 200){
//         topMenu.classList.add("show-btn");
//    }else{
//         topMenu.classList.remove("show-btn");
//    }

});



$(document).ready(function(){
    $(".section").owlCarousel();
});