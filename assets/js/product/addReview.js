const reviewsContainer = document.querySelector('.reviews');

const addReviewButton = document.querySelector('.leave-feedback__form button');
const reviewGrade = document.querySelector('.leave-feedback__form input');
const reviewText = document.querySelector('.leave-feedback__form textarea')

addReviewButton.setAttribute('disabled', '');

reviewGrade.addEventListener('input', () => {
    if (reviewGrade.value !== '') {
        addReviewButton.removeAttribute('disabled');
    }
    if (reviewGrade.value > 10) {
        reviewGrade.value = 10;
    }
})

addReviewButton.addEventListener('click', () => {
    const name = document.createElement('p');
    name.classList.add('reviews-item__name');
    name.textContent = 'Имя Фамилия';
    const grade = document.createElement('p');
    grade.classList.add('reviews-item__grade');
    grade.textContent = reviewGrade.value + '/10';
    const text = document.createElement('p');
    text.classList.add('reviews-item__text');
    text.textContent = reviewText.value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('reviews-item');

    reviewItem.appendChild(name);
    reviewItem.appendChild(grade);
    reviewItem.appendChild(text);

    reviewsContainer.appendChild(reviewItem);
    
    reviewGrade.value = '';
    reviewText.value = '';
});