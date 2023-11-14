const photoInput = document.querySelector('#input-profile-photo');
const profilePhoto = document.querySelector('.profile-info-container img');

photoInput.addEventListener('change', () => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        profilePhoto.setAttribute('src', fileReader.result)
    }
    const photo = photoInput.files[0];
    fileReader.readAsDataURL(photo);
})