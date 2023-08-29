// get all elements here now
const closeBtn = document.querySelector(".menu-toggler");
const sideClose = document.getElementById("sideclose");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header-top-area");
const searchToggler = document.querySelector(".search_toggler");
const headerRight = document.querySelector(".header-right");
const searchInput = document.querySelector(".search-input");


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

searchToggler.addEventListener("click", (e) =>{
    headerRight.classList.toggle("show-search");
});

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !headerRight.contains(event.target)) {
        headerRight.classList.remove("show-search");
    }
});



$(document).ready(function(){
    $(".home-slider").owlCarousel({
        items:1,
        loop: true,
        autoplay: false,
        dots: false,
        nav:true,
        navText:["<i class='nav-btn prev-slide'></i>","<i class='nav-btn next-slide'></i>"]        
    });
});

$(document).ready(function(){
    $(".promot-slider-list").owlCarousel({
        items:1,
        loop: true,
        autoplay: false,
        dots: true,
        nav:false,        
    });
});

$('.product-list').masonry({
    // options
    itemSelector: '.single-product-item ',
});