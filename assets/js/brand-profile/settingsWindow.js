const openSettingsButton = document.querySelector('.fa-cogs');
const modalWindowBackground = document.querySelector('.brand-profile-settings__background');
const modalWindow = document.querySelector('.brand-profile-settings__modal-window');
const closeModalWIndowButton = document.querySelector('.brand-profile-settings__modal-window i');

openSettingsButton.addEventListener('click', () => {
modalWindowBackground.style.display = 'flex';
body.style.overflowY = 'hidden';
setTimeout(() => {
    modalWindowBackground.style.opacity = 100;
    modalWindow.style.transform = 'scale(1)';
},300)
})

closeModalWIndowButton.addEventListener('click', () => {
    body.style.overflowY = 'scroll';
    modalWindow.style.transform = 'scale(0.01)';
    modalWindowBackground.style.opacity = 0;
    setTimeout(() => {
        modalWindowBackground.style.display = 'none';
    }, 300)
})