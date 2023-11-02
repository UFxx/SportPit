const filtersIcon = document.querySelector('.fa-filter');
const filtersContainer = document.querySelector('.filters-container');
const closeFiltersContainerIcon = document.querySelector('.fa-times');

filtersIcon.addEventListener('click', () => {
    filtersContainer.style.right = '0px';
})

closeFiltersContainerIcon.addEventListener('click', () => {
    filtersContainer.style.right = '-304px';
});