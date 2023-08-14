const hamburgerMenu = document.querySelector('#checkbox2');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
}

hamburgerMenu.addEventListener('click', toggleMenu);

var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Welcome to our website!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Check out our projects!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Let\'s create an <strong>amazing</strong> project for you!')
    .pauseFor(2500)
    .deleteAll()
    .start();