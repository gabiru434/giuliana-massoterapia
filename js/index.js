const headerBarra = document.querySelector('.header__barra');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerBarra.classList.add('scrolled');
    } else {
        headerBarra.classList.remove('scrolled');
    }
});