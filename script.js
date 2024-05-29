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
let navLinkE1 = document.querySelectorAll('.nav-link');


menuBtn.addEventListener('click', ()=>{
    menuE1.classList.add("menu-active");
})

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
})

closeBtn.addEventListener('click', ()=>{
    menuE1.classList.remove("menu-active");
})

navLinkE1.forEach(eachBtn => {
    eachBtn.addEventListener('click', ()=>{
        menuE1.classList.remove('menu-active')
    })
})

window.addEventListener("scroll", ()=>{
    headerE1.classList.toggle("header-active", scrollY > 0)
})


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

scroll_animation.reveal(".box-img, .about-right, .services-list, .contact-right", {origin: "right"})
scroll_animation.reveal(".box-content, .about-left, .work-list, .footer-element, .contact-left", {origin: "left"})

// -------contact form--------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxcflJhtTXZWC_QXLBiGivG948gIZPEgDQdH1uuX-taKqTtBZyaKuHd46SRidcg8IW7dA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const loader = document.getElementById("loader");

form.addEventListener('submit', e => {
    e.preventDefault();
    loader.style.display = "block"; // Show the loader
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        loader.style.display = "none"; 
        // msg.innerHTML = "Message sent successfully.."
        alert("Message sent successfully..");
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => {
        loader.style.display = "none"; // Hide the loader
        console.error('Error!', error.message);
    });
});

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "images/sun.png"
    }else{
        icon.src = "images/moon.png"
    }
}