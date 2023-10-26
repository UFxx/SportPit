const addProductButton = document.querySelector('#add-product');
const clearFieldsButton = document.querySelector('#clear-fields');
const itemsContainer = document.querySelector('.items__container');
const brandName = document.querySelector('.brand-info h1');
const productNameInput = document.querySelector('.product-general-info__name');
const productPriceInput = document.querySelector('.product-general-info__price');

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

addProductButton.addEventListener('click', () => {
    zeroElementsItemsContainer.style.display = 'none';

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
    itemName.innerHTML = productNameInput.value + `<br\>${brandName.textContent}`;
    itemInfoContainer.appendChild(itemPrice);
    itemPrice.textContent = productPriceInput.value + '₽';

    // Add img (needs some work)
    const fileInput = document.querySelector('input[type="file"]');
    const fileInputButtonText = document.querySelector('#file-input__label');
    const productPreviewImage = document.querySelector('.product-preview .item img');
    const fileReader = new FileReader();
    fileInputButtonText.textContent = fileInput.files[0].name;
    fileReader.onload = function () {
        productPreviewImage.setAttribute('src', fileReader.result);
    }
    const file = fileInput.files[0];
    fileReader.readAsDataURL(file);

    clearFields();
});

clearFieldsButton.addEventListener('click', () => {
    clearFields();
})