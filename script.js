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
    .typeString('Seja bem-vindo ao nosso site!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Confira nossos projetos!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Vamos criar um projeto <strong>incrivel</strong> para você!')
    .pauseFor(2500)
    .deleteAll()
    .start();

    