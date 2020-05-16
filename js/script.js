//pegando o stylesheet

const stylesheet = document.getElementById('stylesheet');
const darkToggle = document.getElementById('toggleButton');
const toggleBall = document.getElementById('toggleBall');


toggleButton.addEventListener('click', () => {
    //alterando style ao clicar no botão
    stylesheet.href.match('style.css') ? stylesheet.setAttribute('href', 'css/styleDark.css') : stylesheet.setAttribute('href', 'css/style.css');
    //animação no botão que altera o style da pagina
    toggleBall.classList.toggle('ballToRight');
    toggleBall.style.transition = " 0.3s ease-in-out";
})