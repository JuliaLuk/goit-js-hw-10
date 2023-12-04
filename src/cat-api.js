// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_jkkLyqjTr8RbEPHLuS5UGhwJV6rcFi9zJesfe2p6RuvQ5zCatKJJ401i56PpvO61';

// function fetchBreeds() {
//   return axios.get('https://api.thecatapi.com/v1/breeds');
//   // .then(result => {
//   //   if (!result.ok) {
//   //     throw new Error('Oops! Something went wrong! Try reloading the page!');
//   //   }
//   //   return result.json();
//   // })
//   // .then(data => console.log(data))
//   // .catch(error => console.log(error));
// }

// function fetchCatByBreed(breedId) {
//   return axios.get(
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
//   );
//   // .then(response => response.data)
//   // .catch(error => {
//   //   console.log(error);
//   //   throw error;
//   // });
// }

// export { fetchBreeds, fetchCatByBreed };

// --------------------

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_jkkLyqjTr8RbEPHLuS5UGhwJV6rcFi9zJesfe2p6RuvQ5zCatKJJ401i56PpvO61';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export const fetchBreeds = () => {
  return axios.get('breeds').then(response => response.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`images/search?breed_ids=${breedId}`)
    .then(response => response.data[0]);
};
