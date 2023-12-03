import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const divPicture = document.querySelector('.div-picture');
const catInfo = document.querySelector('.cat-info');

fetchBreeds()
  .then(breeds => {
    console.log(breeds);
    select.style.visibility = 'visible';
    // loader.style.display = 'none';
    // const cat = breeds
    //   .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    //   .join('');

    select.insertAdjacentHTML('beforeend', createMarkup(breeds));
  })

  .catch(error => {
    console.log(error);
    loader.style.display = 'none';
    // Notiflix.Notify.failure(
    //   'Oops! Something went wrong! Try reloading the page!'
    // );
  });

select.addEventListener('change', hendelSelect);
divPicture.innerHTML = '';
catInfo.innerHTML = '';
function hendelSelect(event) {
  event.preventDefault();
  const selectedBreed = this.value;

  loader.style.display = 'block';

  fetchCatByBreed(selectedBreed).then(breeds => {
    // loader.style.display = 'none';
    const catData = breeds[0];
    divPicture.innerHTML = `
    <img class="picture" src="${catData.url}" alt="${catData.breeds[0].name}">`;
    catInfo.innerHTML = `
      <h2 class="title">${catData.breeds[0].name}</h2>
      <p class="text">${catData.breeds[0].description}</p>
      <p class="temp"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>`;
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ name, image, temperament, description }) => `
    <div class="cat-info">
      <p class="cat-name">${name}</p>
      <img class="div-picture" src="${image.url}" alt="${name}" />
      <p class="cat-temp">${temperament}</p>
      <p class="cat-descr">${description}</p>
    </div>
  `
    )
    .join('');
}
