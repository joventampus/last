
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.haha',{delay:150, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});
sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});
sr.reveal('.share',{delay:950, origin: 'bottom'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});
sr.reveal('.home-img1',{delay:1000, origin: 'right'});
sr.reveal('.title',{delay:200, origin: 'left'});
sr.reveal('.right-text',{delay:300, origin: 'right'});




$(document).ready(function(){
    $('.carousel').carousel();
});

function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("./img/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

function playVideo() {
    var video = document.getElementById("myVideo");
    var image = document.querySelector(".video img");
    var closeButton = document.getElementById("closeButton");
    
    image.style.display = "none";
    video.style.display = "block"; // Ensure video is displayed
    closeButton.style.display = "block"; // Also show the close button
    video.play();
}

