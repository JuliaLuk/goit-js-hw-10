// import axios from 'axios';

function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(result => {
      if (!result.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return result.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

export { fetchBreeds };
