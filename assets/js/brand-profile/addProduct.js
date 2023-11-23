const addProductButton = document.querySelector('#add-product');
const clearFieldsButton = document.querySelector('#clear-fields');
const itemsContainer = document.querySelector('.items__container');
const brandName = document.querySelector('.brand-info h1');
const productNameInput = document.querySelector('.product-general-info__name');
const productPriceInput = document.querySelector('.product-general-info__price');
const fileInput = document.querySelector('input[type="file"]');
const fileInputButtonText = document.querySelector('#file-input__label');



// Clear inputs fields
function clearFields() {
    productNameInput.value = '';
    productPriceInput.value = '';
    fileInputButtonText.textContent = 'Фото не выбрано';
    fileInput.value = '';
}

// 
const zeroElementsItemsContainer = document.createElement('p');
window.addEventListener('load', () => {
    if (itemsContainer.firstElementChild === null) {
        itemsContainer.appendChild(zeroElementsItemsContainer);
        zeroElementsItemsContainer.textContent = 'Здесь пока ничего нет';
        zeroElementsItemsContainer.style.fontSize = '24px';
        zeroElementsItemsContainer.style.fontWeight = '700';
        zeroElementsItemsContainer.style.color = 'black';
        zeroElementsItemsContainer.style.opacity = '70%';
    }
})

const addProductForm = document.querySelector('.add-product__form');

addProductButton.addEventListener('click', () => {
    zeroElementsItemsContainer.remove();
    itemsContainer.children.length > 0 ? addProductButton.setAttribute('disabled', '') : addProductButton.removeAttribute('disabled', '');

    addProductForm.style.height = '320px';

    // Add item
    const item = document.createElement('div');
    item.classList.add('item');
    itemsContainer.appendChild(item);
    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', '');
    itemImg.classList.add('item__img');
    item.appendChild(itemImg);
    const itemInfoContainer = document.createElement('div');
    itemInfoContainer.classList.add('item-info');
    item.appendChild(itemInfoContainer);
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    itemInfoContainer.appendChild(itemName);
    itemName.innerHTML = 'Введите имя' + `<br\>${brandName.textContent}`;
    itemInfoContainer.appendChild(itemPrice);
    itemPrice.textContent = 'Введите цену';


    function inputsEvents(input) {
        if (input == productNameInput) {
            input.addEventListener('input', () => {
                itemName.innerHTML = input.value + `<br\>${brandName.textContent}`;
            })
        } else if (input == productPriceInput) {
            input.addEventListener('input', () => {
                itemPrice.innerHTML = input.value + '₽';
            })
        } else if (input == fileInput) {
            input.addEventListener('change', () => {
                const productPreviewImage = document.querySelector('.product-preview .item img');
                const fileReader = new FileReader();
                fileInputButtonText.textContent = input.files[0].name;
                fileReader.onload = function () {
                    console.log(productPreviewImage);
                    productPreviewImage.setAttribute('src', fileReader.result)
                }
                const file = input.files[0];
                fileReader.readAsDataURL(file);
            });
        }
    }
    inputsEvents(productNameInput);
    inputsEvents(productPriceInput);
    inputsEvents(fileInput);
});

clearFieldsButton.addEventListener('click', () => {
    clearFields();
})