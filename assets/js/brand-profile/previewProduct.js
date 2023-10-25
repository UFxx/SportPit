const fileInput = document.querySelector('input[type="file"]');
const fileInputButtonText = document.querySelector('#file-input__label');
const productPreviewImage = document.querySelector('.product-preview .item img');

fileInput.addEventListener('change', () => {
    fileInputButtonText.textContent = fileInput.files[0].name;
    console.log(productPreviewImage, fileInput.files);
})