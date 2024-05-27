let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });
};

let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let menuE1 = document.querySelector(".menu");
let headerE1 = document.querySelector("header");
const navLinkE1 = document.querySelectorAll('.nav-link');


menuBtn.addEventListener('click', ()=>{
    menuE1.classList.add("menu-active");
})

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
})

closeBtn.addEventListener('click', ()=>{
    menuE1.classList.remove("menu-active");
})

window.addEventListener("scroll", ()=>{
    headerE1.classList.toggle("header-active", scrollY > 0)
})

// Add click event listener to each navigation item
// navLinkE1.forEach(link => {
//     link.addEventListener('click', function() {
//         // Remove 'active' class from all navigation items
//         navLinkE1.forEach(item => item.classList.remove('active'));
//         // Add 'active' class to the clicked navigation item
//         this.classList.add('active');
//     });

//     link.addEventListener('mouseover',  function() {
//         navLinkE1.forEach(item => item.classList.remove('active'));
//     })
// });


// -----about tab----
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//animation
const scroll_animation = ScrollReveal({reset: false, distance: "80px", duration: 2500, delay: 500});

scroll_animation.reveal(".box-img, .about-col-2, .services-list, .contact-right", {origin: "right"})
scroll_animation.reveal(".box-content, .about-col-1, .work-list, .footer-element, .contact-left", {origin: "left"})
