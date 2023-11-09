const categorieMusclesContainer = document.querySelector('.muscles');
const categorieWieghtLossContainer = document.querySelector('.weight-loss');
const categorieWieghtGainContainer = document.querySelector('.weight-gain');

const categorieMusclesItems = document.querySelectorAll('.categorie-item-muscles');
const categorieWeightLossItems = document.querySelectorAll('.categorie-item-weight-loss');
const categorieWeightGainItems = document.querySelectorAll('.categorie-item-weight-gain');

let sumLength = categorieMusclesItems.length + categorieWeightLossItems.length + categorieWeightGainItems.length;

for (i = 0; i < sumLength; i++) {
    categorieMusclesContainer.appendChild(categorieMusclesItems[i]);
    categorieWieghtLossContainer.appendChild(categorieWeightLossItems[i]);
    categorieWieghtGainContainer.appendChild(categorieWeightGainItems[i]);
}