const scrollToTopButton = document.querySelector('.scroll-to-top__button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('scroll-to-top__button-active');
    } else {
        scrollToTopButton.classList.remove('scroll-to-top__button-active');
    }
})