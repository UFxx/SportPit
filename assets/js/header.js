const headerMenuMobile = document.querySelector('.header-menu-mobile');
const headerMenuMobileIcon = document.querySelector('.header-menu-mobile__icon');
const headerMenuMobileBars = document.querySelectorAll('.header-menu-mobile__icon-item');

// Header mobile menu animation
function headerMobileMenuAnimation() {
    headerMenuMobile.classList.toggle('header-menu-mobile-open');
    for (i = 0; i < headerMenuMobileBars.length; i++) {
        headerMenuMobileBars[0].style.transform = "rotate(45deg)";
        headerMenuMobileBars[1].style.transform = "rotate(-45deg)";
        headerMenuMobileBars[1].style.marginTop = "-7px";
        headerMenuMobileBars[2].style.transform = "rotate(-45deg)";
        headerMenuMobileBars[2].style.marginTop = "-6.5px";
    }

    if (!headerMenuMobile.classList.contains('header-menu-mobile-open')) {
        headerMenuMobileBars.forEach(el => {
            el.style.transform = "rotate(0deg)";
            el.style.marginTop = "0px";
        })
    }
}

headerMenuMobileIcon.addEventListener('click', () => {
    headerMenuMobile.style.display = 'flex';

    setTimeout(headerMobileMenuAnimation, 0);
});

// Responsive search
const headerSearch = document.querySelector('.header-menu__search');
const headerLogoContainer = document.querySelector('.header-logo');
if (window.outerWidth <= 520) {
    headerLogoContainer.append(headerSearch);
}

// Change logo icon & color
const colors = ['#DFDF4A', '#008000', '#E92C03'];
const icons = ['fa-bicycle', 'fa-volleyball-ball', 'fa-dumbbell', 'fa-skiing'];

const headerLogo = document.querySelector('.header-logo__text');
const headerLogoIcon = document.querySelector('.fas');
window.addEventListener('load', () => {
    let randomColorNumber = Math.round(Math.random()*2);
    let randomIconNumber = Math.round(Math.random()*3);
    headerLogo.style.color = `${colors[randomColorNumber]}`;
    headerLogoIcon.classList.add(`${icons[randomIconNumber]}`);
})

// Go to the main page by clicking on the logo
headerLogo.addEventListener('click', () => {
    window.location.href = './index.html'
});