import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
axios.defaults.headers.common['x-api-key'] =
  'live_jkkLyqjTr8RbEPHLuS5UGhwJV6rcFi9zJesfe2p6RuvQ5zCatKJJ401i56PpvO61';
const breedSelect = document.querySelector('.breed-select');
console.log(breedSelect);
const catInfo = document.querySelector('.cat-info');
console.log(catInfo);

breedSelect.addEventListener('click', hendelSelect);
function hendelSelect(event) {
  event.preventDefault();
  const { id } = event.currentTarget.elements;
  //   console.log(id);
}
