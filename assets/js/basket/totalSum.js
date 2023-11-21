const itemPrice = document.querySelectorAll('.item-price');
const productsSumPrice = document.querySelector('.order-everything p');

const plusCounter = document.querySelectorAll('.fa-plus');
const minusCounter = document.querySelectorAll('.fa-minus');
const productCountInput = document.querySelectorAll('.counter-text');

const deleteItemButton = document.querySelectorAll('.fa-trash-alt');

// Count products sum price default
let defaultSum = 0;
itemPrice.forEach(el => {
    defaultSum += el.textContent / 1;
})
productsSumPrice.children[0].textContent = defaultSum;

deleteItemButton.forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.parentElement.children[0].children[3].children[0].textContent = 0;
    })
})

// Count products sum price on click
function countProductsSumPrice(button) {
    button.forEach(el => {
        el.addEventListener('click', () => {
            let sum = 0;
            itemPrice.forEach(el => {
                if (button == plusCounter) {
                    sum += el.textContent / 1;
                } else if (button == minusCounter) {
                    sum += el.textContent / 1;
                } else if (button == deleteItemButton) {
                    sum += el.parentElement.parentElement.children[3].children[0].textContent / 1;
                }
                productsSumPrice.children[0].textContent = sum;
            })
        })
    })
}
countProductsSumPrice(plusCounter);
countProductsSumPrice(minusCounter);
countProductsSumPrice(deleteItemButton);

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