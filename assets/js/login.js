const login = document.querySelector('.login');
const loginButtons = document.querySelectorAll('.header-menu ul li:first-of-type a, .header-menu-mobile ul li:first-of-type a');
const closeLogin = document.querySelector('.fa-times');
const body = document.querySelector('body');

loginButtons.forEach(element => {
    element.addEventListener('click', () => {
        login.classList.add('login-active');
        body.style.overflowY = 'hidden';
    })
});

closeLogin.addEventListener('click', () => {
    login.classList.remove('login-active');
    body.style.overflowY = 'scroll';
});