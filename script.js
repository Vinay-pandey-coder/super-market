let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

animate.reveal('.logo,.header-icon,#menu-icon');
animate.reveal('ul',{origin:"top"})
animate.reveal(".home-img img", {dealy:400,origin: "right"});
animate.reveal(".home-text", {origin: "left"});


// about
animate.reveal(".about-img img", {origin: "left"});
animate.reveal(".about-text", {origin: "right"});

// card
animate.reveal(".box", {interval: 100});
animate.reveal(".heading", {origin: "top"});

// footer
animate.reveal(".footer",{origin:"bottom"})
animate.reveal(".copy",{origin:"bottom"})