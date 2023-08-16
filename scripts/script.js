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

// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para aplicar a classe de animação quando o elemento estiver visível
function handleScrollAnimation() {
    const animatedElements = document.querySelectorAll('.popup');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Adiciona um listener para o evento 'scroll'
window.addEventListener('scroll', handleScrollAnimation);

// Chama a função uma vez quando a página carregar para checar os elementos já visíveis
window.addEventListener('load', handleScrollAnimation);