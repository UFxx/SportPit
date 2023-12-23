const items = document.querySelectorAll('.item');

items.forEach(el => {
    if (window.innerWidth < 555) {
        el.addEventListener('click', () => {
        window.location.href = '/brand-profile.html';
        })
    }
})