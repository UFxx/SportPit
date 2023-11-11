const itemPrice = document.querySelectorAll('.item-price');
const productsSumPrice = document.querySelector('.order-everything p');

const plusCounter = document.querySelectorAll('.fa-plus');
const minusCounter = document.querySelectorAll('.fa-minus');
const productCountInput = document.querySelectorAll('.counter-text');

// Count products sum price default
let defaultSum = 0;
itemPrice.forEach(el => {
    defaultSum += el.textContent / 1;
})
productsSumPrice.children[0].textContent = defaultSum;

// Count products sum price on click
function countProductsSumPrice(counter) {
    counter.forEach(el => {
        el.addEventListener('click', () => {
            let sum = 0;
            itemPrice.forEach(el => {
                if (counter == plusCounter) {
                    sum += el.textContent / 1;
                } else if (counter == minusCounter) {
                    sum += el.textContent / 1;
                }
                productsSumPrice.children[0].textContent = sum;
            })
        })
    })
}
countProductsSumPrice(plusCounter);
countProductsSumPrice(minusCounter);

// Count products sum price on input
productCountInput.forEach(el => {
    el.addEventListener('input', () => {
        let sum = 0;
        itemPrice.forEach(el => {
            sum += el.textContent / 1;
        })
        productsSumPrice.children[0].textContent = sum;
    })
})